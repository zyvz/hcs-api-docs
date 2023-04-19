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
    metrodiv_name: {
      type: 'string',
      description: 'Name of the metrodiv',
      example: 'San Francisco-Redwood City-South San Francisco, CA',
    },
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
