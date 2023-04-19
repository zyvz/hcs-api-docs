import { Level, Endpoint } from '../../types';

export const hazardEarthquake: Endpoint = {
  target: 'hazard_earthquake',
  level: Level.block,
  summary: 'USGS earthquake risk for block',
  description:
    'This endpoint provides information on earthquake risk from the US Geological Survey for a specific block. It returns peak horizontal ground acceleration values with a 10% probability of being exceeded in the next 50 years. Percentile values within the county and entire US are provided for context.',
  schema: {
    type: 'object',
    properties: {
      max_percent_g: {
        type: 'number',
        description:
          'Peak horizontal ground acceleration with a 10% probability of being exceeded in the next 50 years. Values are given in %g, where g is acceleration due to gravity, or 9.8 meters/second^2.',
      },
      county_percentile: {
        type: 'integer',
        description:
          'Where the max_percent_g falls within the county. Percentile values range from 0 to 100, with higher values indicating greater risk.',
      },
      nation_percentile: {
        type: 'integer',
        description:
          'Where the max_percent_g falls within the USA. Percentile values range from 0 to 100, with higher values indicating greater risk.',
      },
    },
  },
};
