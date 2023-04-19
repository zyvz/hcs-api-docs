import { Level, Endpoint } from '../../types';

export const marketPulseTimeseries: Endpoint = {
  target: 'market_pulse/timeseries',
  level: Level.state,
  version: 3,
  summary: 'Historical market trends',
  description:
    'Market pulse timeseries for the state. The market pulse is a composite of several indicators, including the price index (PI), affordability, and vacancy rate.',
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
          state: {
            type: 'string',
            description: 'The identifier of the requested state',
            example: 'CA',
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
