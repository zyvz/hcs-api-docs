import { OpenAPIV3 } from 'openapi-types';

export const api: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    api_code_description: {
      type: 'string',
      enum: ['ok', 'no content'],
      example: 'ok',
    },
    api_code: {
      type: 'integer',
      enum: [0, 204],
      example: 0,
    },
  },
  required: ['api_code_description', 'api_code'],
};
