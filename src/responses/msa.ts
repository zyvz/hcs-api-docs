import { OpenAPIV3 } from 'openapi-types';

export const msa: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    msa: {
      type: 'string',
      description: '5-digit US-census msa ID',
      example: '41860',
      minLength: 5,
      maxLength: 5,
    },
    msa_name: {
      type: 'string',
      description: 'Name of the msa',
      example: 'San Francisco-Oakland-Hayward, CA',
    },
  },
};
