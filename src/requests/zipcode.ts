import type { OpenAPIV3 } from 'openapi-types';

export const zipcode: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    zipcode: {
      type: 'string',
      description: '5-digit zipcode',
      example: '33019',
      minLength: 5,
      maxLength: 5,
    },
  },
  required: ['zipcode'],
};
