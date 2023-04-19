import { Level, Endpoint } from '../../types';

export const marketPulseRentalTimeseries: Endpoint = {
  target: 'market_pulse_rental/timeseries',
  level: Level.msa,
  version: 3,
  summary: 'Historical rental market trends',
  description:
    'This endpoint provides insight into the supply and demand changes seen through inventory and pricing levels within a broad range of coverage areas across the US. Here, in-depth rental market trends are accessible across US MSAs, over a requested time range.',
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
          msa: {
            type: 'string',
            description: 'The requested MSA',
          },
          msaName: {
            type: 'string',
            description: 'The name of the requested MSA',
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
