import { Endpoint } from '../../types';
import { rpiTsForecast } from './rpi-ts-forecast';

export const rpiTsHistorical: Endpoint = {
  ...rpiTsForecast,
  target: 'rpi_ts_historical',
  summary: 'Historical rental price index (RPI)',
  description:
    'Historical time series of monthly rental price index (RPI) values for the ZIP code. Coverage varies by area but may include historical data back to 1975.',
};
