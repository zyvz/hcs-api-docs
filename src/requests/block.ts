import type { OpenAPIV3 } from 'openapi-types';

export const block: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    block_id: {
      type: 'string',
      description: '15-digit US-census block ID',
      example: '360050001001000',
      minLength: 15,
      maxLength: 15,
    },
  },
  required: ['block_id'],
};
