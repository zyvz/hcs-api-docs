import { OpenAPIV3 } from 'openapi-types';

export const zipcode: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    zip: {
      type: 'string',
      nullable: true,
      example: '33019',
      description: '5-digit zip code',
      minLength: 5,
      maxLength: 5,
    },
  },
};
