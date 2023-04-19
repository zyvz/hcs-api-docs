import { Level, Endpoint } from '../../types';

export const hazardHurricane: Endpoint = {
  target: 'hazard_hurricane',
  level: Level.block,
  summary: 'Hurricane activity summary',
  description:
    'This endpoint provides a HouseCanary proprietary summary of historical hurricane activity in the area, with percentile values within the county and entire US for context. The data is based on information from the National Oceanic and Atmospheric Administration up to 2016. It does not yet include data from 2017.',
  schema: {
    type: 'object',
    properties: {
      accumulated_energy: {
        type: 'number',
        description:
          'Estimated total accumulated energy from all hurricanes recorded near the block.',
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
