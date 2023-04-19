import { Endpoint } from '../../types';
import { hpiTsForecast } from './hpi-ts-forecast';

export const hpiTsHistorical: Endpoint = {
  ...hpiTsForecast,
  target: 'hpi_ts_historical',
  summary: 'Historical home price index (HPI)',
  description:
    'Historical time series of monthly home price index (HPI) values for the ZIP code. Coverage varies by area but may include historical data back to 1975.',
};
