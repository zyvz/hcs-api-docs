import { Level, Endpoint } from '../../types';

export const compSale: Endpoint = {
  version: 3,
  target: 'comps_sale',
  level: Level.property,
  summary: 'Sales comparables with similarity score',
  description:
    "The comps_sale endpoint allows you to programmatically pull down quantitatively-derived sales comparables based on a given subject property. The comparable properties in the response are ordered by HouseCanary's proprietary similarity score algorithm. You are also given the option to select additional data elements to be returned via one of our existing property endpoints for each returned comparable property.",
  customParams: [
    {
      name: 'min_sim_score',
      in: 'query',
      description:
        'Lower threshold for the similarity score of nearby properties to be considered as comps. Integer within the range from 0 (Least similar) to 100 (Most similar). Defaults to 93.',
      schema: {
        type: 'integer',
        minimum: 0,
        maximum: 100,
        default: 93,
      },
    },
    {
      name: 'min_date',
      in: 'query',
      description:
        'Oldest date for desired comparable properties. Defaults to 6 months.',
      schema: {
        type: 'string',
        format: 'date',
        default: 'now-6M',
      },
    },
    {
      name: 'status',
      in: 'query',
      description:
        'Market status of the comparable property. One of: ACTIVE, OFF_MARKET, BOTH. Defaults to BOTH.',
      schema: {
        type: 'string',
        enum: ['ACTIVE', 'OFF_MARKET', 'BOTH'],
        default: 'BOTH',
      },
    },
    {
      name: 'additional_data',
      in: 'query',
      description:
        'Optional ability to supply other endpoints for the returned comparable properties (example: property/value, property/details, etc.).',
      schema: {
        type: 'string',
      },
    },
    {
      name: 'num_comps',
      in: 'query',
      description:
        'Number of desired comparable properties to be returned - Integer. Defaults to 8.',
      schema: {
        type: 'integer',
        default: 8,
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      sales_comps: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            additional_data: {
              type: 'object',
              description:
                'Additional data for the comparable property, if requested.',
            },
            address: {
              $ref: '#/components/schemas/address_info',
            },
            info: {
              type: 'object',
              properties: {
                baths: {
                  type: 'integer',
                  description:
                    'Number of bathrooms in the comparable property.',
                },
                beds: {
                  type: 'integer',
                  description: 'Number of bedrooms in the comparable property.',
                },
                close_date: {
                  type: 'string',
                  format: 'date',
                  description: 'Date the comparable property was closed.',
                },
                close_price: {
                  type: 'integer',
                  description: 'Price the comparable property was closed at.',
                },
                distance_from_subject: {
                  type: 'number',
                  description: 'Distance from the subject property, in miles.',
                },
                listing_date: {
                  type: 'string',
                  format: 'date',
                  description: 'Date the comparable property was listed.',
                },
                listing_price: {
                  type: 'integer',
                  description: 'Price the comparable property was listed at.',
                },
                lot_size: {
                  type: 'integer',
                  description:
                    'Lot size of the comparable property, in square feet.',
                },
                similarity_score: {
                  type: 'integer',
                  description:
                    "The HouseCanary-derive score that denotes the property's similarity to the subject property.",
                  minimum: 0,
                  maximum: 100,
                },
                sqft: {
                  type: 'integer',
                  description: 'Square footage of the comparable property.',
                },
                status: {
                  type: 'string',
                  description: 'Market status of the comparable property.',
                },
              },
            },
          },
        },
      },
      subject_property: {
        $ref: '#/components/schemas/address_info',
      },
    },
  },
};
