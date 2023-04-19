import { Endpoint, Level } from '../../types';
import { timeSeriesParams } from '../../requests';

export const affordabilityTsForecast: Endpoint = {
  target: 'affordability_ts_forecast',
  level: Level.metrodiv,
  summary: 'Affordability time series forecast',
  description:
    'Forecast time series of monthly affordability values for the Metropolitan Division. Coverage varies by area but may include forecast data three years into the future.',
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
              description: 'Month of the affordability value in ISO format',
            },
            afford_pmt: {
              type: 'number',
              description:
                'Fraction of median household income required to make the median home payment on a 30 year fixed rate mortgage with 20% down',
            },
            afford_detrended: {
              type: 'number',
              description:
                'The normalized distance of afford_pmt from a long term linear trend. Units are in standard deviations from the mean.',
            },
          },
        },
        description: 'Set of forecast affordability values',
      },
    },
  },
};
