import { Level, Endpoint } from '../../types';

export const marketPulseRentalTimeseries: Endpoint = {
  target: 'market_pulse_rental/timeseries',
  level: Level.state,
  version: 3,
  summary: 'Historical rental market trends',
  description:
    'Rental market pulse timeseries for the state. The rental market pulse is a composite of several indicators, including the rental price index (RPI), rental affordability, and rental vacancy rate.',
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
