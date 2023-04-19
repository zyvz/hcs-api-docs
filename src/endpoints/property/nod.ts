import { Endpoint, Level } from '../../types';

export const nod: Endpoint = {
  target: 'nod',
  level: Level.property,
  summary:
    "Notice of default (NOD) events recorded for the property since the last arm's length transaction that have not been rescinded.",
  description: `Returns the Notice of Default (NOD) events recorded for the property since the last arm\'s length transaction that have not been rescinded. The result is sorted by record_date in ascending order by default, but the sorting can be reversed using the 'order' parameter. The 'limit', 'start', and 'end' parameters can be used to limit the number of returned results and filter the results by record_date.`,
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
      description: 'Maximum integer number of result items to return',
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
        'Beginning date limit for result items, based on record_date, in ISO 8601 format, i.e. 2015-01-01',
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
        'Ending date limit for result items, based on record_date, in ISO 8601 format, i.e. 2015-01-01',
      example: '2015-01-01',
      schema: {
        type: 'string',
        nullable: true,
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
      event_type: {
        type: 'string',
        description: 'Type of notice',
      },
      fips: {
        type: 'string',
        description:
          '5-digit Federal Information Processing Standards county code',
      },
      record_book: {
        type: 'string',
        description:
          "Record book number for the recorded lien. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
      },
      record_date: {
        type: 'string',
        format: 'date',
        description: 'Date the lien originated',
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
