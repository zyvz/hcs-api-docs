import { Level, Endpoint } from '../../types';

export const marketPulseLatest: Endpoint = {
  target: 'market_pulse/latest',
  level: Level.msa,
  version: 3,
  summary: 'Latest market trends',
  description:
    'This endpoint provides insight into the supply and demand changes seen through inventory and pricing levels within a broad range of coverage areas across the US. Here, in-depth market trends are accessible across US MSAs, returning the most-current analysis.',
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
        $ref: '#/components/schemas/MarketPulse',
      },
    },
  },
};
