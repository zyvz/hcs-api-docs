import { Endpoint, Level } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  summary: 'Retrieve multiple metrodiv-level endpoint data',
  description:
    'The metrodiv/component_mget endpoint allows you to retrieve data from multiple Analytics API metrodiv-level endpoints in one request. Provide a comma separated list of metrodiv endpoint names in the components query parameter to specify which metrodiv endpoints you would like to include.',
  level: Level.metrodiv,
  schema: {
    type: 'object',
  },
};
