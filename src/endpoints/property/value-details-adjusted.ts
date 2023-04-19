import { Level, Endpoint } from '../../types';

export enum AdjustedValueDetails {
  Beds = 'add_beds',
  Baths = 'add_baths',
  Sqft = 'add_sqft',
  Pools = 'add_pools',
}

export const valueDetailsAdjusted: Endpoint = {
  summary: 'Property value with adjustments',
  description:
    'Requires at least one parameter specifying the detail to adjust. If multiple details are specified in one request, the adjusted_value_to in the response will reflect the combined effect of all adjustments - it will not return separate values for each individual adjustment. To determine the value effects of several different adjustments, multiple queries are required, but can be combined into one POST request. If we cannot perform the adjustment for any reason, a 204 response will be returned and the call will not be charged.',
  target: 'value_details_adjusted',
  level: Level.property,
  customParams: [
    {
      name: AdjustedValueDetails.Beds,
      in: 'query',
      description:
        'The number of bedrooms to add to calculate an adjusted value for the property.',
      schema: { type: 'integer' },
    },
    {
      name: AdjustedValueDetails.Baths,
      in: 'query',
      description:
        'The number of bathrooms to add to calculate an adjusted value for the property. Only accepts whole and half number values, corresponding to full and half bathrooms.',
      schema: { type: 'number' },
    },
    {
      name: AdjustedValueDetails.Sqft,
      in: 'query',
      description:
        'The number of square feet to add to calculate an adjusted value for the property.',
      schema: { type: 'integer' },
    },
    {
      name: AdjustedValueDetails.Pools,
      in: 'query',
      description:
        'The number of pools to add to calculate an adjusted value for the property. Only accepts a value of "1".',
      schema: { type: 'integer' },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      adjusted_value_to: {
        type: 'integer',
        description:
          'The adjusted value of the property based on the provided adjustments.',
      },
      adjustments: {
        type: 'object',
        properties: {
          add_beds: {
            type: 'integer',
            description:
              'The number of bedrooms added to calculate the adjusted value.',
          },
          add_baths: {
            type: 'number',
            description:
              'The number of bathrooms added to calculate the adjusted value.',
          },
          add_sqft: {
            type: 'integer',
            description:
              'The number of square feet added to calculate the adjusted value.',
          },
          add_pools: {
            type: 'integer',
            description:
              'The number of pools added to calculate the adjusted value.',
          },
        },
      },
    },
  },
};
