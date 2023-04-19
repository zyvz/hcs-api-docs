import { OpenAPIV3 } from 'openapi-types';

export const metrodiv: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    metrodiv: {
      type: 'string',
      description: '5-digit US-census metrodiv ID',
      example: '41884',
      minLength: 5,
      maxLength: 5,
    },
  },
};
