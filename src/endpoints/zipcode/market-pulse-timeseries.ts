import { Endpoint, Level } from '../../types';

export const marketPulseTimeseries: Endpoint = {
  level: Level.zip,
  version: 3,
  target: 'market_pulse/timeseries',
  summary: 'Historical market trends',
  description:
    'This endpoint provides insight into the supply and demand changes seen through inventory and pricing levels within a broad range of coverage areas across the US. Here, in-depth market trends are accessible across US zipcodes, over a requested time range.',
  customParams: [
    {
      name: 'start_date',
      in: 'query',
      description: 'The earliest date of the desired time-series range',
      example: '2022-11-14',
      required: true,
    },
    {
      name: 'end_date',
      in: 'query',
      description: 'The latest date of the desired time-series range',
      example: '2022-12-01',
      required: true,
    },
  ],
  schema: {
    type: 'object',
    properties: {
      geoInfo: {
        type: 'object',
        properties: {
          zipcode: {
            type: 'string',
            description: 'The requested zipcode',
          },
        },
      },
      listingStats: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/MarketPulse',
        },
      },
    },
  },
};
