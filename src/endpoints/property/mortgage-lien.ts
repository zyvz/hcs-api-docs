import { Level, Endpoint } from '../../types';

export const mortgageLien: Endpoint = {
  target: 'mortgage_lien',
  level: Level.property,
  summary: 'Liens identified since last transaction',
  description:
    "Identifies liens / mortgages since last arm's length transaction (i.e. when the property transacted to the current owner).",
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
        description: 'Amount in dollars financed',
        type: 'integer',
      },
      apn: {
        description: "Assessor's Parcel Number or Parcel Identification Number",
        type: 'string',
      },
      arm_index: {
        description: 'ARM index followed by the lien',
        type: 'string',
        enum: [
          'cd_6m',
          'cofi',
          'libor_1m',
          'libor_1y',
          'libor_2m',
          'libor_3m',
          'libor_6m',
          'mta_12m',
          'prime',
          'tbill_10y',
          'tbill_1y',
          'tbill_3y',
          'tbill_5y',
          'tbill_6m',
        ],
      },
      due_date: {
        description: 'The date the lien is scheduled to be paid-in-full',
        type: 'string',
        format: 'date',
      },
      event_type: {
        description: 'The type of loan acquired',
        type: 'string',
      },
      fifteen_yr: {
        description:
          'The FRED 15-year mortgage rate at the time of origination',
        type: 'number',
        format: 'float',
      },
      fips: {
        description:
          '5-digit Federal Information Processing Standards county code',
        type: 'string',
      },
      grantee_1: {
        description: 'Last name of first person listed on lien',
        type: 'string',
      },
      grantee_1_forenames: {
        description: 'First name of first person listed on lien',
        type: 'string',
      },
      grantee_2: {
        description: 'Last name of second person listed on lien',
        type: 'string',
      },
      grantee_2_forenames: {
        description: 'First name of second person listed on lien',
        type: 'string',
      },
      grantor_1: {
        description: 'Name of the primary financier of the lien',
        type: 'string',
      },
      grantor_2: {
        description: 'Name of the secondary financier of the lien',
        type: 'string',
      },
      hc_interest_rate: {
        description:
          "HouseCanary estimated interest rate. Will differ from “interest_rate” if and only if there is a stated interest rate in the recorder's books",
        type: 'number',
        format: 'float',
      },
      heloc: {
        description: 'Whether the loan is a home equity line of credit',
        type: 'boolean',
      },
      interest_rate: {
        description:
          'The estimated interest rate, based on mortgage_years and FRED rates',
        type: 'number',
        format: 'float',
      },
      lender_type: {
        description: 'Entity making the loan',
        type: 'string',
        enum: [
          'bank',
          'credit_union',
          'finance_company',
          'government',
          'individual_private_party',
          'insurance',
          'internet',
          'lending_institution',
          'mortgage_company',
          'other_company',
          'reo_foreclosure_company',
          'seller',
          'subprime_lender',
        ],
      },
      lien_type: {
        description: 'The type of lien acquired',
        type: 'string',
        enum: [
          'arm',
          'commercial',
          'construction',
          'conventional',
          'fannie_mae_freddie_mac',
          'farmers_home_administration',
          'fha',
          'land_contract',
          'open_end',
          'revolving_credit_line',
          'second_to_cover_down_payment',
          'seller_take_back',
          'stand_alone_first',
          'stand_alone_refi',
          'stand_alone_second',
          'state_veterans',
          'usda',
          'va',
        ],
      },
      mortgage_years: {
        description:
          'Estimated mortgage timeframe. Calculated as floor(due_date - record_date)',
        type: 'integer',
      },
      record_book: {
        description:
          "Record book number for the recorded lien. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
        type: 'string',
      },
      record_date: {
        description: 'Date the lien originated',
        type: 'string',
        format: 'date',
      },
      record_doc: {
        description:
          "The assessor's document number for this lien. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
        type: 'string',
      },
      record_page: {
        description:
          "Record page of the lien in the county recorder. A unique transaction in many counties may be defined in the recorder's books by a unique: record_book, record_page, record_doc.",
        type: 'string',
      },
      stand_alone_refi: {
        description: 'Whether the refinance occurred with no concurrent loans',
        type: 'boolean',
      },
      thirty_yr: {
        description:
          'The FRED 30-year mortgage rate at the time of origination',
        type: 'number',
        format: 'float',
      },
    },
  },
};
