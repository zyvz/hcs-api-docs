import { Level, Endpoint } from '../../types';

export const taxHistory: Endpoint = {
  target: 'tax_history',
  level: Level.property,
  summary: 'Tax and assessment values',
  description:
    'Returns current and historical tax and assessment values for the property.',
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
        'Beginning date limit for result items, based on tax_year, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      schema: {
        type: 'string',
        nullable: true,
        format: 'date',
        default: null,
      },
    },
    {
      name: 'end',
      in: 'query',
      description:
        'Ending date limit for result items, based on tax_year, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      schema: {
        type: 'string',
        nullable: true,
        format: 'date',
        default: null,
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      apn: {
        type: 'string',
        description: "Assessor's Parcel Number or Parcel Identification Number",
      },
      assessment_year: {
        type: 'integer',
        description: 'Year the assessment was conducted',
      },
      tax_amount: {
        type: 'integer',
        description: 'Amount in dollars of tax owed on the property',
      },
      tax_year: {
        type: 'integer',
        description: 'Tax year for which the assessment applies',
      },
      total_assessed_value: {
        type: 'integer',
        description:
          'The total assessed value of both land and improvements (before exemptions, if any) as reported on the county tax/assessment roll in the indicated year.',
      },
    },
  },
};
