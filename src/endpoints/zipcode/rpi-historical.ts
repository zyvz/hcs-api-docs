import { Endpoint, Level } from '../../types';

export const rpiHistorical: Endpoint = {
  target: 'rpi_historical',
  level: Level.zip,
  summary: 'Historical rental price index (RPI)',
  description:
    'HouseCanary proprietary metrics identifying historical rental returns for the local ZIP code based on HouseCanary rental price index (RPI).',
  schema: {
    type: 'object',
    properties: {
      cagr_1_year: {
        type: 'number',
        description:
          'Historical 1-year compound annual growth rate (CAGR) in rental values',
      },
      cagr_5_years: {
        type: 'number',
        description:
          'Historical 5-year compound annual growth rate (CAGR) in rental values',
      },
      cagr_10_years: {
        type: 'number',
        description:
          'Historical 10-year compound annual growth rate (CAGR) in rental values',
      },
      returns_1_year: {
        type: 'number',
        description: 'Rental value appreciation for the last year based on RPI',
      },
      returns_5_years: {
        type: 'number',
        description:
          'Rental value appreciation for the last 5 years based on RPI',
      },
      returns_10_years: {
        type: 'number',
        description:
          'Rental value appreciation for the last 10 years based on RPI',
      },
    },
  },
};
