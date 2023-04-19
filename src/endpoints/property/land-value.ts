import { Endpoint, Level } from '../../types';

export const landValue: Endpoint = {
  summary: 'Proprietary land valuation models monthly',
  description:
    'HouseCanary proprietary sale valuation models for the land included in the property, computed and updated every month.',
  target: 'land_value',
  level: Level.property,
  schema: {
    type: 'object',
    properties: {
      value_mean: {
        type: 'integer',
        description:
          'HouseCanary automated monthly land value. Created using a robust model ensemble methodology',
      },
      value_upr: {
        type: 'integer',
        description:
          'HouseCanary land AVM upper bound. Calculated as value_mean * (1 + fsd)',
      },
      value_lwr: {
        type: 'integer',
        description:
          'HouseCanary land AVM lower bound. Calculated as value_mean * (1 - fsd)',
      },
      fsd: {
        type: 'number',
        description:
          'HouseCanary forecast standard deviation for the HouseCanary land AVM',
      },
    },
  },
};
