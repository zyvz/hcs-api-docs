import { Level, Endpoint } from '../../types';
import { timeSeriesParams } from '../../requests';

export const hpiForecast: Endpoint = {
  target: 'hpi_forecast',
  level: Level.zip,
  summary: 'Forecasted home price index (HPI)',
  description:
    'Forecast time series of monthly home price index values for the ZIP codebased on HouseCanary home price index (HPI).',
  customParams: timeSeriesParams,
  schema: {
    type: 'object',
    properties: {
      cagr_12mo_f: {
        type: 'number',
        description: 'Forecast 1-year compound annual growth rate (CAGR)',
      },
      cagr_24mo_f: {
        type: 'number',
        description: 'Forecast 2-year compound annual growth rate (CAGR)',
      },
      cagr_36mo_f: {
        type: 'number',
        description: 'Forecast 3-year compound annual growth rate (CAGR)',
      },
      returns_12mo_f: {
        type: 'number',
        description:
          'Forecast home price appreciation for the next 12 months based on HPI forecast',
      },
      returns_24mo_f: {
        type: 'number',
        description:
          'Forecast home price appreciation for the next 24 months based on HPI forecast',
      },
      returns_36mo_f: {
        type: 'number',
        description:
          'Forecast home price appreciation for the next 36 months based on HPI forecast',
      },
      max_12mo_loss: {
        type: 'number',
        description:
          'Historical max percent loss in HPI over a 12 month period',
      },
      risk_12mo_loss: {
        type: 'number',
        description:
          "Probability that this market's HPI will be lower 12 months from now than the current HPI",
      },
    },
  },
};
