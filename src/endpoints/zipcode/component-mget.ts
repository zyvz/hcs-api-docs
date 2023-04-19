import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  level: Level.zip,
  summary: 'Retrieve multiple zip-level endpoint data',
  description:
    'The zip/component_mget endpoint allows you to retrieve data from multiple Analytics API zip-level endpoints in one request. Provide a comma separated list of zip endpoint names in the components query parameter to specify which zip endpoints you would like to include.',
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'A comma separated list of zip endpoint names. Spaces are not allowed.',
      example: 'zip/details,zip/volatility',
      required: true,
    },
  ],
  schema: {
    type: 'object',
  },
};
