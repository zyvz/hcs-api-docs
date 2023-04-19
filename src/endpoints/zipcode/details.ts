import { Level, Endpoint } from '../../types';

export const zipDetails: Endpoint = {
  target: 'details',
  level: Level.zip,
  summary: 'ZIP code market summary',
  description:
    'Summarizes the current market environment in the local ZIP code by property type. Returns details on single family homes.',
  schema: {
    type: 'object',
    properties: {
      single_family: {
        type: 'object',
        properties: {
          historical: {
            type: 'object',
            properties: {
              inventory_total: {
                type: 'number',
                description: 'Number of properties listed for sale',
              },
              price_median: {
                type: 'number',
                description: 'Median listed price',
              },
              estimated_sales_total: {
                type: 'number',
                description:
                  'Total estimated sales based on the number of absorbed listings and likelihood of being relisted',
              },
              months_of_inventory_median: {
                type: 'number',
                description:
                  'Median months supply of actively listed properties',
              },
              days_on_market_median: {
                type: 'number',
                description: 'Median days on market of listed properties',
              },
              cagr_1_year: {
                type: 'number',
                description:
                  'Historical 1-year compound annual growth rate (CAGR)',
              },
              cagr_5_years: {
                type: 'number',
                description:
                  'Historical 5-year compound annual growth rate (CAGR)',
              },
              cagr_10_years: {
                type: 'number',
                description:
                  'Historical 10-year compound annual growth rate (CAGR)',
              },
              cagr_20_years: {
                type: 'number',
                description:
                  'Historical 20-year compound annual growth rate (CAGR)',
              },
              returns_1: {
                type: 'number',
                description:
                  'Home price appreciation for the last year based on HPI',
              },
              returns_5_years: {
                type: 'number',
                description:
                  'Home price appreciation for the last 5 years based on HPI',
              },
              returns_10_years: {
                type: 'number',
                description:
                  'Home price appreciation for the last 10 years based on HPI',
              },
              returns_20_years: {
                type: 'number',
                description:
                  'Home price appreciation for the last 20 years based on HPI',
              },
            },
          },
        },
      },
    },
  },
};
