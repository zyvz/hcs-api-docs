import { Level, Endpoint } from '../../types';
import { affordabilityTsForecast } from './affordability-ts-forecast';

export const affordabilityTsHistorical: Endpoint = {
  ...affordabilityTsForecast,
  target: 'affordability_ts_historical',
  summary: 'Historical MSA affordability',
  description:
    'Historical time series of monthly affordability values for the MSA. Coverage varies by area but may include historical data back to 1975.',
};
