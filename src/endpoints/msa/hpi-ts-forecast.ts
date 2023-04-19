import { Level, Endpoint } from '../../types';
import { timeSeriesParams } from '../../requests';

export const hpiTsForecast: Endpoint = {
  target: 'hpi_ts_forecast',
  summary: 'Forecast home price index',
  description:
    'Forecast time series of monthly home price index (HPI) values for the MSA. Coverage varies by area but may include forecast data three years into the future.',
  level: Level.msa,
  customParams: timeSeriesParams,
  schema: {
    type: 'object',
    properties: {
      time_series: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            hpi_value: {
              type: 'number',
              description: 'HPI value',
            },
            hpi_real: {
              type: 'number',
              description: 'Inflation-adjusted HPI value',
            },
            hpi_trend: {
              type: 'number',
              description: 'Long-term linear trend in HPI value',
            },
            hpi_distance: {
              type: 'number',
              description:
                'Normalized distance of HPI value from a long term linear trend. Units are in standard deviations from the mean.',
            },
            month: {
              type: 'string',
              format: 'date',
              description: 'Month of the HPI value in ISO format',
            },
          },
        },
        description: 'Set of historical HPI values with the associated month',
      },
    },
  },
};
