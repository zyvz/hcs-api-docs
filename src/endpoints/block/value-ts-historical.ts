import { Endpoint } from '../../types';
import { valueTsForecast } from './value-ts-forecast';

export const valueTsHistorical: Endpoint = {
  ...valueTsForecast,
  target: 'value_ts_historical',
  summary: 'Historical property values',
  description:
    'This endpoint provides a historical time series of monthly block-median data for dollar value and dollar value per sq ft. You can specify a desired property type using the `property_type` request parameter. The default is SFD. You can also specify the `order`, `limit`, `start`, and `end` request parameters. The `order` parameter determines the chronological order to sort result items. The `limit` parameter sets the maximum integer number of result items to return. The `start` and `end` parameters set the beginning and ending date limits for result items, respectively, based on month in ISO 8601 format (e.g., 2015-01-01). Values may go back as far as 1985',
};
