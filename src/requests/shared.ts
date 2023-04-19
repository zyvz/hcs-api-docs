import { OpenAPIV3 } from 'openapi-types';

export const timeSeriesParams: OpenAPIV3.ParameterObject[] = [
  {
    name: 'order',
    in: 'query',
    description:
      'Chronological order to sort result items. One of [asc or desc]. Defaults to asc.',
    schema: {
      type: 'string',
      nullable: true,
      enum: ['asc', 'desc'],
      default: 'asc',
    },
  },
  {
    name: 'limit',
    in: 'query',
    description:
      'Maximum integer number of result items to return. Defaults to null.',
    schema: {
      type: 'integer',
      nullable: true,
      default: null,
    },
  },
  {
    name: 'start',
    in: 'query',
    description:
      'Beginning date limit for result items, based on month, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
    example: '2015-01-01',
    schema: {
      type: 'string',
      nullable: true,
      default: null,
    },
  },
  {
    name: 'end',
    in: 'query',
    description:
      'Ending date limit for result items, based on month, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
    example: '2015-01-01',
    schema: {
      type: 'string',
      nullable: true,
      default: null,
    },
  },
];
