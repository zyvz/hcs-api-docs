import { Level, Endpoint } from '../../types';

export const componentMget: Endpoint = {
  target: 'component_mget',
  level: Level.msa,
  summary: 'Retrieve multiple msa-level endpoint data',
  description:
    'The msa/component_mget endpoint allows you to retrieve data from multiple Analytics API msa-level endpoints in one request. Provide a comma separated list of msa endpoint names in the components query parameter to specify which msa endpoints you would like to include.',
  customParams: [
    {
      name: 'components',
      in: 'query',
      description:
        'A comma separated list of msa endpoint names. Spaces are not allowed.',
      example: 'msa/details,msa/hpi_ts_forecast',
      required: true,
    },
  ],
  schema: {
    type: 'object',
  },
};
