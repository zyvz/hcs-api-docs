import fs from 'fs';
import path from 'path';
import { OpenAPIV3 } from 'openapi-types';
import { pascalCase } from 'change-case';
import endpoints from './endpoints';
import { errorResponses, RESPONSE_SCHEMAS } from './responses';
import sharedSchemas from './schemas';

export const baseDocument: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'HouseCanary Analytics API',
    version: '1.0.0',
    description: fs.readFileSync(
      path.resolve(__dirname, './description.md'),
      'utf8'
    ),
  },

  servers: [
    {
      url: 'https://api.housecanary.com',
    },
  ],

  security: [{ BasicAuth: [] }],

  tags: [
    { name: 'Property Level' },
    { name: 'Block Level' },
    { name: 'Blockgroup Level' },
    { name: 'Zip Level' },
    { name: 'Metrodiv Level' },
    { name: 'Msa Level' },
    { name: 'State Level' },
  ],

  components: {
    securitySchemes: {
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
    schemas: {
      ...sharedSchemas,
      ...RESPONSE_SCHEMAS,
      ...endpoints.reduce<OpenAPIV3.ComponentsObject['schemas']>(
        (schemas, { schema, target, level }) => {
          schemas![`${pascalCase(level)}/${pascalCase(target)}`] = schema;
          return schemas;
        },
        {}
      ),
    },
    responses: {
      ...errorResponses,
    },
  },

  paths: {},
};
