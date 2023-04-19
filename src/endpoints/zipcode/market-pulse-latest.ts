import { Level, Endpoint } from '../../types';

export const marketPulseLatest: Endpoint = {
  target: 'market_pulse/latest',
  level: Level.zip,
  version: 3,
  summary: 'Latest market trends',
  description:
    'This endpoint provides insight into the supply and demand changes seen through inventory and pricing levels within a broad range of coverage areas across the US. Here, in-depth market trends are accessible across US zipcodes, returning the most-current analysis.',
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
        $ref: '#/components/schemas/MarketPulse',
      },
    },
  },
};
