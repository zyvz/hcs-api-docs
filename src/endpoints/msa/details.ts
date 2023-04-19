import { Level, Endpoint } from '../../types';

export const details: Endpoint = {
  target: 'details',
  level: Level.msa,
  summary: 'MSA returns and risk',
  description: `Returns and risk information for the MSA.`,
  schema: {
    type: 'object',
    properties: {
      msa: {
        type: 'string',
        description: '5-digit US-census msa ID',
        example: '41860',
        minLength: 5,
        maxLength: 5,
      },
      msa_name: {
        type: 'string',
        description: 'Name of the msa',
        example: 'San Francisco-Oakland-Hayward, CA',
      },
      cagr_1: {
        type: 'number',
        description: 'Historical 1-year compound annual growth rate (CAGR)',
      },
      cagr_5: {
        type: 'number',
        description: 'Historical 5-year compound annual growth rate (CAGR)',
      },
      cagr_10: {
        type: 'number',
        description: 'Historical 10-year compound annual growth rate (CAGR)',
      },
      cagr_20: {
        type: 'number',
        description: 'Historical 20-year compound annual growth rate (CAGR)',
      },
      returns_1: {
        type: 'number',
        description: 'Home price appreciation for the last year based on HPI',
      },
      returns_5: {
        type: 'number',
        description:
          'Home price appreciation for the last 5 years based on HPI',
      },
      returns_10: {
        type: 'number',
        description:
          'Home price appreciation for the last 10 years based on HPI',
      },
      returns_20: {
        type: 'number',
        description:
          'Home price appreciation for the last 20 years based on HPI',
      },
      max_12mo_loss: {
        type: 'number',
        description: 'Historical maximum percentage 12-month loss in HPI',
      },
      risk_12mo_loss: {
        type: 'number',
        description:
          'Probability that this market’s HPI will be lower 12 months from now than the current HPI',
      },
    },
  },
};
