import { OpenAPIV3 } from 'openapi-types';

export const block: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    block_id: {
      type: 'string',
      nullable: true,
      example: '360050001001000',
      description: '15-digit US-census block ID',
      minLength: 15,
      maxLength: 15,
    },
  },
};
