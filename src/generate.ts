import fs from 'fs';
import yaml from 'js-yaml';
import type { OpenAPIV3 } from 'openapi-types';
import { Endpoint, Level } from './types';
import {
  propertyRequest,
  blockRequest,
  blockgroupRequest,
  zipcodeRequest,
  metrodivRequest,
  msaRequest,
  stateRequest,
} from './requests';
import { apiResponse, RESPONSE_LEVEL_KEY } from './responses';
import endpoints from './endpoints';
import { baseDocument } from './openapi';

const REQUEST_LEVEL_SCHEMA: Record<Level, OpenAPIV3.SchemaObject> = {
  [Level.property]: propertyRequest,
  [Level.block]: blockRequest,
  [Level.blockgroup]: blockgroupRequest,
  [Level.zip]: zipcodeRequest,
  [Level.metrodiv]: metrodivRequest,
  [Level.msa]: msaRequest,
  [Level.state]: stateRequest,
};

function transformSchemaToQueryParams(
  schema: OpenAPIV3.SchemaObject
): OpenAPIV3.ParameterObject[] {
  const { properties, required = [] } = schema;
  return Object.entries(properties as OpenAPIV3.SchemaObject).map(
    ([name, { description, example }]) => {
      return {
        in: 'query',
        name,
        description,
        example,
        required: required.includes(name),
        schema: {
          type: 'string',
        },
      };
    }
  );
}

function requireSchemaForAllQueryParams(
  params: OpenAPIV3.ParameterObject[]
): OpenAPIV3.ParameterObject[] {
  return params.map((param) => {
    if (!param.schema) {
      param.schema = { type: 'string' };
    }
    return param;
  });
}

function generateTagNameForLevel(level: Level): string {
  return `${level.charAt(0).toUpperCase() + level.slice(1)} Level`;
}

function generateV2SchemaSuccessResponse(
  schema: OpenAPIV3.SchemaObject,
  level: Level,
  target: string
): OpenAPIV3.ResponseObject {
  const commonResponseSchema: OpenAPIV3.SchemaObject = {
    ...apiResponse,
    properties: {
      ...apiResponse.properties,
      result: schema,
    },
  };

  return {
    description: 'Success',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              [`${level}/${target}`]: commonResponseSchema,
              [RESPONSE_LEVEL_KEY[level]]: {
                $ref: `#/components/schemas/${RESPONSE_LEVEL_KEY[level]}`,
              },
            },
          },
        },
      },
    },
  };
}

function generateV3SchemaSuccessResponse(
  schema: OpenAPIV3.SchemaObject
): OpenAPIV3.ResponseObject {
  return {
    description: 'Success',
    content: {
      'application/json': {
        schema,
      },
    },
  };
}

function generatePath({
  version = 2,
  target,
  level,
  schema,
  summary,
  description,
  tagLevel,
  customParams = [],
}: Endpoint & { tagLevel?: Level }): OpenAPIV3.PathsObject {
  let paths: OpenAPIV3.PathsObject = {};
  const tag = generateTagNameForLevel(tagLevel || level);

  const responses = {
    '200':
      version === 3
        ? generateV3SchemaSuccessResponse(schema)
        : generateV2SchemaSuccessResponse(schema, level as Level, target),
    '400': { $ref: '#/components/responses/BadRequest' },
    '401': { $ref: '#/components/responses/Unauthorized' },
    '429': { $ref: '#/components/responses/RateLimitExceeded' },
  };

  paths[`/v${version}/${level}/${target}`] = {
    get: {
      summary,
      description,
      tags: [tag],
      parameters: [
        ...transformSchemaToQueryParams(REQUEST_LEVEL_SCHEMA[level]),
        ...requireSchemaForAllQueryParams(customParams),
      ],
      responses,
    },
    post: {
      summary,
      description,
      tags: [tag],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: REQUEST_LEVEL_SCHEMA[level],
            },
          },
        },
      },
      responses,
    },
  };

  return paths;
}

function generatePaths(endpoint: Endpoint): OpenAPIV3.PathsObject {
  let paths: OpenAPIV3.PathsObject = generatePath(endpoint);

  if (endpoint.level !== Level.property && endpoint.version !== 3) {
    paths = {
      ...paths,
      ...generatePath({
        ...endpoint,
        level: Level.property,
        target: `${endpoint.level}_${endpoint.target}`,
        tagLevel: endpoint.level,
      }),
    };
  }
  return paths;
}

async function run() {
  let paths: OpenAPIV3.PathsObject = {};
  endpoints.forEach((endpoint) => {
    paths = { ...paths, ...generatePaths(endpoint) };
  });
  const document = {
    ...baseDocument,
    paths,
  };
  const result = yaml.dump(document, { noRefs: true });
  fs.writeFileSync('openapi.yaml', result);
}

run().catch(console.error);
