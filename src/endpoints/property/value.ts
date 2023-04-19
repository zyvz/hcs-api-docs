import { Level, Endpoint } from '../../types';

export const value: Endpoint = {
  summary: 'HouseCanary automated monthly home valuation.',
  description:
    'HouseCanary proprietary sale valuation models for each property, computed and updated every month.',
  target: 'value',
  level: Level.property,
  schema: {
    type: 'object',
    properties: {
      price_mean: {
        type: 'integer',
        description:
          'HouseCanary automated monthly home value. Created using a robust model ensemble methodology.',
      },
      price_upr: {
        type: 'integer',
        description:
          'HouseCanary AVM upper bound. Calculated as price_mean * (1 + fsd)',
      },
      price_lwr: {
        type: 'integer',
        description:
          'HouseCanary AVM lower bound. Calculated as price_mean * (1 - fsd)',
      },
      fsd: {
        type: 'number',
        description:
          'HouseCanary forecast standard deviation for the HouseCanary AVM',
      },
    },
  },
};
