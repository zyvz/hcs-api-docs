import { Level, Endpoint } from '../../types';

export const valueTsForecast: Endpoint = {
  target: 'value_ts_forecast',
  level: Level.block,
  summary: 'Property value forecast',
  description:
    'This endpoint provides a forecast time series of monthly block-median data for dollar value and dollar value per sq ft. The values are forecast one year into the future. You can specify a desired property type using the `property_type` request parameter. The default is SFD. You can also specify the `order`, `limit`, `start`, and `end` request parameters. The `order` parameter determines the chronological order to sort result items. The `limit` parameter sets the maximum integer number of result items to return. The `start` and `end` parameters set the beginning and ending date limits for result items, respectively, based on month in ISO 8601 format (e.g., 2015-01-01).',
  schema: {
    type: 'object',
    properties: {
      property_type: {
        type: 'string',
        description:
          'Type of property specified in the request. Defaults to SFD. One of [SFD, TH, CND, INC, MFH].',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
      time_series: {
        type: 'array',
        description: 'List of months and values.',
        items: {
          type: 'object',
          properties: {
            month: {
              type: 'string',
              description: 'Month of the value in ISO format.',
            },
            value_median: {
              type: 'integer',
              description:
                'Amount in dollars of the forecasted median property sale value for the month.',
            },
            value_sqft_median: {
              type: 'number',
              description:
                'Amount in dollars of the forecasted median property sale value per square foot for the month.',
            },
          },
        },
      },
    },
  },
  customParams: [
    {
      name: 'property_type',
      in: 'query',
      description:
        'Desired property type to include in the time series. Defaults to SFD. One of [SFD, TH, CND, INC, MFH].',
      schema: {
        type: 'string',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
    },
    {
      name: 'order',
      in: 'query',
      description:
        'Chronological order to sort result items. One of [asc or desc]. Defaults to asc.',
      schema: {
        type: 'string',
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
        minimum: 1,
      },
    },
    {
      name: 'start',
      in: 'query',
      description:
        'Beginning date limit for result items, based on month, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      schema: {
        type: 'string',
        format: 'date',
      },
    },
    {
      name: 'end',
      in: 'query',
      description:
        'Ending date limit for result items, based on month, in ISO 8601 format, i.e. 2015-01-01. Defaults to null.',
      schema: {
        type: 'string',
        format: 'date',
        default: null,
      },
    },
  ],
};
