import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  level: Level.state,
  summary: 'Retrieve multiple state-level endpoint data',
  description:
    'The state/component_mget endpoint allows you to retrieve data from multiple Analytics API state-level endpoints in one request. Provide a comma separated list of state endpoint names in the components query parameter to specify which state endpoints you would like to include.',
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'A comma separated list of state endpoint names. Spaces are not allowed.',
      example: 'state/affordability_ts,state/rpi_ts_forecast',
      required: true,
    },
  ],
  schema: {
    type: 'object',
  },
};
