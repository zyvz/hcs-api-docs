import type { OpenAPIV3 } from 'openapi-types';

export const property: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    address: {
      type: 'string',
      example: '123 Main St',
      description:
        'Either a single URL-safe string ("slug") identifying the address, or just a building number, street name, and optionally unit number (if not a slug the payload must also include other identifiers)',
    },
    unit: {
      type: 'string',
      example: 'Apt 1',
      description:
        'Unit number for the property, if needed and not already specified in the address string',
    },
    city: {
      type: 'string',
      example: 'San Francisco',
      description: 'City in which the property is located',
    },
    state: {
      type: 'string',
      example: 'CA',
      description:
        '2-letter acronym of the US state in which the property is located',
    },
    zipcode: {
      type: 'string',
      example: '94105',
      description: '5-digit US zipcode in which the property is located',
    },
  },
  required: ['address'],
};
