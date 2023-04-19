import { OpenAPIV3 } from 'openapi-types';

export const blockgroup: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    block_id: {
      type: 'string',
      nullable: true,
      description: '12-digit census block group ID',
      example: '060750615003',
      minLength: 12,
      maxLength: 12,
    },
  },
};
