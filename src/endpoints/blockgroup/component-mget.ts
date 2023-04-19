import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  level: Level.blockgroup,
  summary: 'Retrieve multiple blockgroup-level endpoint data',
  description:
    'The blockgroup/component_mget endpoint allows you to retrieve data from multiple Analytics API blockgroup-level endpoints in one request. Provide a comma separated list of blockgroup endpoint names in the components query parameter to specify which block endpoints you would like to include. This endpoint does not have a predefined schema because the response will depend on the specific endpoints that are included in the request.',
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'Comma separated list of blockgroup endpoint names, like "blockgroup/hcri,blockgroup/value_ts_historical". Spaces are not allowed between listed endpoints.',
      schema: {
        type: 'string',
      },
      required: true,
    },
  ],
  schema: {
    type: 'object',
  },
};
