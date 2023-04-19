import { OpenAPIV3 } from 'openapi-types';

export const property: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    address_full: {
      type: 'string',
      nullable: true,
      example: '483 Bright St San Francisco CA 94132',
    },
    slug: {
      type: 'string',
      nullable: true,
      example: '483-Bright-St-San-Francisco-CA-94132',
    },
    address: {
      type: 'string',
      nullable: true,
      example: '483 Bright St',
    },
    unit: {
      type: 'string',
      nullable: true,
      example: 'Apt 1',
    },
    city: {
      type: 'string',
      nullable: true,
      example: 'San Francisco',
    },
    state: {
      type: 'string',
      nullable: true,
      example: 'CA',
      minLength: 2,
      maxLength: 2,
    },
    zipcode: {
      type: 'string',
      nullable: true,
      example: '94132',
      minLength: 5,
      maxLength: 5,
    },
    zipcode_plus4: {
      type: 'string',
      nullable: true,
      example: '1234',
      minLength: 4,
      maxLength: 4,
    },
    block_id: {
      type: 'string',
      nullable: true,
      example: '060750313013007',
      minLength: 15,
      maxLength: 15,
    },
    blockgroup_id: {
      type: 'string',
      nullable: true,
      example: '060750201004',
      minLength: 12,
      maxLength: 12,
    },
    county_fips: {
      type: 'string',
      nullable: true,
      example: '06075',
      minLength: 5,
      maxLength: 5,
    },
    metrodiv: {
      type: 'string',
      nullable: true,
      example: '41860',
    },
    msa: {
      type: 'string',
      nullable: true,
      example: '41860',
    },
    geo_precision: {
      type: 'string',
      nullable: true,
      enum: ['rooftop', 'zip9', 'zip5', 'unknown'],
      example: 'rooftop',
    },
    lat: {
      type: 'number',
      nullable: true,
      example: 37.789,
    },
    lng: {
      type: 'number',
      nullable: true,
      example: -122.401,
    },
    status: {
      type: 'object',
      properties: {
        match: {
          type: 'boolean',
          description: ` Whether the address was matched to a canonical address in HouseCanary's systems`,
        },
        details: {
          type: 'array',
          items: {
            type: 'string',
            description: `A list of details about the address resolution process`,
          },
        },
        request_item: {
          type: 'object',
          description:
            'Exact address parameters provided in the original API request',
        },
        changes: {
          type: 'array',
          items: {
            type: 'string',
            description: `Transformations applied to the address in the request in order to resolve it`,
          },
        },
        errors: {
          type: 'array',
          items: {
            type: 'string',
            description: `A list of errors encountered while attempting to resolve the address`,
          },
        },
      },
    },
  },
};
