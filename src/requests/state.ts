import { OpenAPIV3 } from 'openapi-types';

export const state: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    state: {
      type: 'string',
      description: '2-letter state abbreviation',
      example: 'CA',
      minLength: 2,
      maxLength: 2,
    },
  },
};
