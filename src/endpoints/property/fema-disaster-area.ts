import { Level, Endpoint } from '../../types';

export const femaDisasterArea: Endpoint = {
  target: 'fema_disaster_area',
  level: Level.property,
  summary: 'Disaster area status and details',
  description: `This endpoint returns data on whether the property is located in a disaster area and details on any open or recently closed disasters in the county where the property is located. The 'data_current_to' field provides the most recent date that data was retrieved from the FEMA API.`,
  customParams: [
    {
      name: 'order',
      in: 'query',
      description: 'Chronological order to sort result items',
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
      description: 'Maximum number of items to return',
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
        'Beginning date limit for result items, based on declared_date, in ISO 8601 format',
      example: '2019-01-01',
      schema: {
        type: 'integer',
        nullable: true,
        default: null,
      },
    },
    {
      name: 'end',
      in: 'query',
      description:
        'Ending date limit for result items, based on declared_date, in ISO 8601 format',
      example: '2019-01-01',
      schema: {
        type: 'integer',
        nullable: true,
        default: null,
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      data_current_to: {
        type: 'string',
        format: 'date',
        description:
          'The most recent date that data was retrieved from the FEMA API (in ISO format)',
      },
      in_disaster_area: {
        type: 'boolean',
        description:
          'Indicates if there is at least one open disaster for the county where the property is located',
      },
      details: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            declared_date: {
              type: 'string',
              format: 'date',
              description: 'The date the disaster was declared',
            },
            end_date: {
              type: 'string',
              format: 'date-time',
              description: 'The date the incident itself ended',
            },
            fema_disaster_num: {
              type: 'integer',
              description:
                'Number assigned to designate an event or incident declared as a disaster',
            },
            fips: {
              type: 'string',
              description: '5-digit FIPS county code',
            },
            start_date: {
              type: 'string',
              format: 'date-time',
              description: 'The date the incident itself began',
            },
            title: {
              type: 'string',
              description:
                'The proper name or description of the disaster, as provided by FEMA',
            },
            type: {
              type: 'string',
              description: 'The specific category for the disaster',
            },
          },
        },
      },
    },
  },
};
