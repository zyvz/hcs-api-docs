import { Endpoint } from '../../types';
import { hpiTsForecast } from './hpi-ts-forecast';

export const hpiTsHistorical: Endpoint = {
  ...hpiTsForecast,
  target: 'hpi_ts_historical',
  summary: 'HPI time series historical',
  description:
    'Historical time series of monthly HPI values for the Metropolitan Division. Coverage varies by area but may include historical data back to 1975.',
};
