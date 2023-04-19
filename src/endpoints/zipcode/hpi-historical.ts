import { Endpoint, Level } from '../../types';
import { timeSeriesParams } from '../../requests';

export const hpiHistorical: Endpoint = {
  target: 'hpi_historical',
  summary: 'Historical home price index (HPI)',
  description:
    'HouseCanary proprietary metrics identify historical price returns for the ZIP code based on HouseCanary home price index (HPI). Metrics include historical 1-year compound annual growth rate (CAGR), historical 10-year CAGR.',
  level: Level.zip,
  customParams: timeSeriesParams,
  schema: {
    type: 'object',
    properties: {
      cagr_1_year: {
        type: 'number',
        description:
          'Historical 1-year compound annual growth rate (CAGR) in sale values',
      },
      cagr_5_years: {
        type: 'number',
        description:
          'Historical 5-year compound annual growth rate (CAGR) in sale values',
      },
      cagr_10_years: {
        type: 'number',
        description:
          'Historical 10-year compound annual growth rate (CAGR) in sale values',
      },
      cagr_20_years: {
        type: 'number',
        description:
          'Historical 20-year compound annual growth rate (CAGR) in sale values',
      },
      returns_1_year: {
        type: 'number',
        description: 'Sale value appreciation for the last year based on HPI',
      },
      returns_5_years: {
        type: 'number',
        description:
          'Sale value appreciation for the last 5 years based on HPI',
      },
      returns_10_years: {
        type: 'number',
        description:
          'Sale value appreciation for the last 10 years based on HPI',
      },
      returns_20_years: {
        type: 'number',
        description:
          'Sale value appreciation for the last 20 years based on HPI',
      },
    },
  },
};
