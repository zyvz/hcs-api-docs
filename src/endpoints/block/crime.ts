import { Level, Endpoint } from '../../types';

export const crime: Endpoint = {
  target: 'crime',
  level: Level.block,
  summary: 'Crime data for a block',
  description:
    'Returns crime data for a specific block or property. Crime is broken down into all, violent, property, and other types of incidents. Incidents are further broken down into nation and county percentiles.',
  schema: {
    type: 'object',
    properties: {
      all: {
        type: 'object',
        properties: {
          incidents: {
            type: 'integer',
            description: 'Count of all crime incidents reported near the block',
          },
          county_percentile: {
            type: 'integer',
            description:
              'For all crimes, where the incident count falls within the county',
          },
          nation_percentile: {
            type: 'integer',
            description:
              'For all crimes, where the incident count falls within the USA',
          },
        },
      },
      property: {
        type: 'object',
        properties: {
          incidents: {
            type: 'integer',
            description:
              'Count of arson, burglary, or vandalism incidents reported near the block',
          },
          county_percentile: {
            type: 'integer',
            description:
              'For arson, burglary, or vandalism incidents, where the incident count falls within the county',
          },
          nation_percentile: {
            type: 'integer',
            description:
              'For arson, burglary, or vandalism incidents, where the incident count falls within the USA',
          },
        },
      },
      violent: {
        type: 'object',
        properties: {
          incidents: {
            type: 'integer',
            description:
              'Count of assault, shooting, or robbery incidents reported near the block',
          },
          county_percentile: {
            type: 'integer',
            description:
              'For assault, shooting, or robbery incidents, where the incident count falls within the county',
          },
          nation_percentile: {
            type: 'integer',
            description:
              'For assault, shooting, or robbery incidents, where the incident count falls within the USA',
          },
        },
      },
      other: {
        type: 'object',
        properties: {
          incidents: {
            type: 'integer',
            description:
              'Count of other crime incidents reported near the block',
          },
          county_percentile: {
            type: 'integer',
            description:
              'For other crime incidents, where the incident count falls within the county',
          },
          nation_percentile: {
            type: 'integer',
            description:
              'For other crime incidents, where the incident count falls within the USA',
          },
        },
      },
    },
  },
};
