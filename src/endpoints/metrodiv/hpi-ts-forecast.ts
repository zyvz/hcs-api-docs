import { Endpoint, Level } from '../../types';
import { timeSeriesParams } from '../../requests';

export const hpiTsForecast: Endpoint = {
  target: 'hpi_ts_forecast',
  level: Level.metrodiv,
  summary: 'HPI time series forecast',
  description:
    'Forecast time series of monthly HPI values for the Metropolitan Division. Coverage varies by area but may include forecast data three years into the future.',
  customParams: timeSeriesParams,
  schema: {
    type: 'object',
    properties: {
      time_series: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            month: {
              type: 'string',
              format: 'date',
              description: 'Month of the HPI value in ISO format',
            },
            hpi_value: {
              type: 'number',
              description: 'Home price index value',
            },
            hpi_real: {
              type: 'number',
              description: 'Home price index value adjusted for inflation',
            },
            hpi_trend: {
              type: 'number',
              description:
                'The normalized distance of hpi_value from a long term linear trend. Units are in standard deviations from the mean.',
            },
            hpi_distance: {
              type: 'number',
              description:
                'The normalized distance of hpi_value from the long term linear trend. Units are in standard deviations from the mean.',
            },
          },
        },
      },
    },
  },
};
