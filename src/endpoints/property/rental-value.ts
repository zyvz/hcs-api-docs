import { Endpoint, Level } from '../../types';

export const rentalValue: Endpoint = {
  target: 'rental_value',
  level: Level.property,
  summary: 'Monthly rental valuations computed',
  description:
    'This endpoint returns HouseCanary proprietary rental valuation models for each property, computed and updated every month. The returned values are computed using a robust model ensemble methodology, with the upper and lower bounds calculated using the forecast standard deviation.',
  schema: {
    type: 'object',
    properties: {
      price_mean: {
        type: 'integer',
        description:
          'HouseCanary automated monthly rental value. Created using a robust model ensemble methodology.',
      },
      price_upr: {
        type: 'integer',
        description:
          'HouseCanary rental AVM upper bound. Calculated as price_mean * (1 + fsd)',
      },
      price_lwr: {
        type: 'integer',
        description:
          'HouseCanary rental AVM lower bound. Calculated as price_mean * (1 - fsd)',
      },
      fsd: {
        type: 'number',
        description:
          'HouseCanary forecast standard deviation for the HouseCanary rental AVM',
      },
    },
  },
};
