import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  level: Level.block,
  summary: 'Retrieve multiple block-level endpoint data',
  description:
    'The block/component_mget endpoint allows you to retrieve data from multiple Analytics API block-level endpoints in one request. Provide a comma separated list of block endpoint names in the components query parameter to specify which block endpoints you would like to include. This endpoint does not have a predefined schema because the response will depend on the specific endpoints that are included in the request.',
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'Comma separated list of block endpoint names, like "block/hcri,block/value_ts_historical". Spaces are not allowed between listed endpoints.',
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
