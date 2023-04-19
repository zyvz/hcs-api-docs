import { Endpoint, Level } from '../../types';

export const salesHistory: Endpoint = {
  target: 'sales_history',
  level: Level.property,
  summary: 'Sales and ownership history',
  description: 'Sales and ownership transfer history.',
  customParams: [
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
        'Beginning date limit for result items, based on record_date, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      example: '2015-01-01',
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
        'Ending date limit for result items, based on record_date, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      example: '2015-01-01',
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
      amount: {
        type: 'integer',
        description: 'Amount in dollars that the property sold for',
      },
      apn: {
        type: 'string',
        description: "Assessor's Parcel Number or Parcel Identification Number",
      },
      event_type: {
        type: 'string',
        description: 'Type of sale',
      },
      fips: {
        type: 'string',
        description:
          '5-digit Federal Information Processing Standards county code',
      },
      grantee_1: {
        type: 'string',
        description: 'Last name of first person listed on deed',
      },
      grantee_1_forenames: {
        type: 'string',
        description: 'First name of first person listed on deed',
      },
      grantee_2: {
        type: 'string',
        description: 'Last name of second person listed on deed',
      },
      grantee_2_forenames: {
        type: 'string',
        description: 'First name of second person listed on deed',
      },
      grantor_1: {
        type: 'string',
        description: 'Name of the primary financier of the deed',
      },
      grantor_2: {
        type: 'string',
        description: 'Name of the secondary financier of the deed',
      },
      record_book: {
        type: 'string',
        description:
          "Record book number for the recorded deed. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
      },
      record_date: {
        type: 'string',
        format: 'date',
        description: 'Date of lien origination',
      },
      record_doc: {
        type: 'string',
        description:
          "The assessor's document number for this lien. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
      },
      record_page: {
        type: 'string',
        description:
          "Record page of the lien in the county recorder. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
      },
    },
  },
};
