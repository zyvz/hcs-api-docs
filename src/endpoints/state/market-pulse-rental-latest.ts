import { Endpoint, Level } from '../../types';

export const marketPulseRentalLatest: Endpoint = {
  target: 'market_pulse_rental/latest',
  level: Level.state,
  version: 3,
  summary: 'Latest rental market trends',
  description:
    'Latest rental market pulse for the state. The rental market pulse is a composite of several indicators, including the rental price index (RPI), rental affordability, and rental vacancy rate.',
  schema: {
    type: 'object',
    properties: {
      geoInfo: {
        type: 'object',
        properties: {
          state: {
            type: 'string',
            description: 'The name of the requested state',
          },
        },
        description: 'An object describing the relevant geographic element.',
      },
      listingStats: {
        $ref: '#/components/schemas/MarketPulse',
      },
    },
  },
};
