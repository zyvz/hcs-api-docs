import { Level, Endpoint } from '../../types';

export const valueHpiAdjusted: Endpoint = {
  target: 'value_hpi_adjusted',
  level: Level.property,
  summary: 'AVM value date adjustment',
  description:
    'The data shows the dollar value of this property adjusted from its current AVM value to a desired date, either in the past or in the future. Adjustments are done by using HPI for block, block group, zipcode, MSA and state. All five adjustments are returned in the response. If the optional parameters client_value and client_date are given, the response will also show adjustment from that date and value to the same desired date.',
  customParams: [
    {
      name: 'adjust_to_date',
      in: 'query',
      description:
        'Target date to adjust the value to. Must be the first of the month, in the ISO format, e.g. "2017-01-01". If not supplied, defaults to the current month.',
      schema: {
        type: 'string',
        nullable: true,
        format: 'date',
      },
    },
    {
      name: 'client_value',
      in: 'query',
      description:
        'Alternative dollar value to adjust, supplied by the caller.',
      schema: {
        type: 'number',
        nullable: true,
      },
    },
    {
      name: 'client_date',
      in: 'query',
      description:
        'Date corresponding to the client_value. Must be the first of the month, in the ISO format, e.g. "2017-01-01"',
      schema: {
        type: 'string',
        nullable: true,
        format: 'date',
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      client_value_adjusted: {
        type: 'object',
        nullable: true,
        properties: {
          from_value: {
            type: 'integer',
          },
          from_date: {
            type: 'string',
            format: 'date',
          },
          to_date: {
            type: 'string',
            format: 'date',
          },
          adjusted_by: {
            type: 'object',
            properties: {
              block: {
                type: 'integer',
              },
              blockgroup: {
                type: 'integer',
              },
              zip: {
                type: 'integer',
              },
              msa: {
                type: 'integer',
              },
              state: {
                type: 'integer',
              },
            },
          },
        },
      },
      housecanary_value_adjusted: {
        type: 'object',
        properties: {
          from_value: {
            type: 'integer',
          },
          from_date: {
            type: 'string',
            format: 'date',
          },
          to_date: {
            type: 'string',
            format: 'date',
          },
          adjusted_by: {
            type: 'object',
            properties: {
              block: {
                type: 'integer',
              },
              blockgroup: {
                type: 'integer',
              },
              zip: {
                type: 'integer',
              },
              msa: {
                type: 'integer',
              },
              state: {
                type: 'integer',
              },
            },
          },
        },
      },
    },
  },
};
