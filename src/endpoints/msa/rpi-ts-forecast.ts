import { Level, Endpoint } from '../../types';
import { timeSeriesParams } from '../../requests';

export const rpiTsForecast: Endpoint = {
  target: 'rpi_ts_forecast',
  level: Level.msa,
  summary: 'Forecasted rental price index (RPI)',
  description:
    'HouseCanary proprietary metrics identifying forecasted rental returns for the local MSA based on HouseCanary rental price index (RPI).',
  customParams: timeSeriesParams,
  schema: {
    type: 'object',
    properties: {
      time_series: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            rpi_value: {
              type: 'number',
              description:
                'Forecast median rental value per square foot based on RPI.',
            },
            month: {
              type: 'string',
              format: 'date',
              description: 'Month of the RPI value in ISO format',
            },
          },
        },
      },
    },
  },
};
