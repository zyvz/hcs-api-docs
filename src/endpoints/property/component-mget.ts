import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  summary: 'Retrieve multiple endpoints at once',
  description:
    'The component_mget endpoint allows you to retrieve data from multiple Analytics API endpoints in one request. Provide a comma separated list of endpoint names in the components query parameter to specify which endpoints you would like to include.',
  target: 'component_mget',
  level: Level.property,
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'Comma separated list of endpoints to include in the response.',
      schema: {
        type: 'string',
      },
      required: true,
    },
  ],
  schema: {
    type: 'object',
    description:
      'The response will contain a key for each endpoint specified in the components query parameter. The value of each key will be the response from the corresponding endpoint.',
  },
};
