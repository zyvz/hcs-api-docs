import { Level, Endpoint } from '../../types';

export const hazardWind: Endpoint = {
  target: 'hazard_wind',
  level: Level.block,
  summary: 'Windstorm activity summary',
  description:
    'This endpoint provides a HouseCanary proprietary summary of historical windstorm activity in the area, with percentile values within the county and entire US for context. The data is based on information from the National Oceanic and Atmospheric Administration.',
  schema: {
    type: 'object',
    properties: {
      accumulated_energy: {
        type: 'number',
        description:
          'Estimated total accumulated energy from all windstorms recorded near the block.',
      },
      county_percentile: {
        type: 'integer',
        description:
          'Where the accumulated energy score falls within the county. Percentile values range from 0 to 100, with higher values indicating greater risk.',
      },
      nation_percentile: {
        type: 'integer',
        description:
          'Where the accumulated energy score falls within the USA. Percentile values range from 0 to 100, with higher values indicating greater risk.',
      },
    },
  },
};
