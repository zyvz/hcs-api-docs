import { affordabilityTsForecast } from './affordability-ts-forecast';
import { affordabilityTsHistorical } from './affordability-ts-historical';
import { details } from './details';
import { hcri } from './hcri';
import { hpiTsForecast } from './hpi-ts-forecast';
import { hpiTsHistorical } from './hpi-ts-historical';
import { rpiTsForecast } from './rpi-ts-forecast';
import { rpiTsHistorical } from './rpi-ts-historical';
import { componentMget } from './component-mget';
import { marketPulseLatest } from './market-pulse-latest';
import { marketPulseTimeseries } from './market-pulse-timeseries';
import { marketPulseRentalLatest } from './market-pulse-rental-latest';
import { marketPulseRentalTimeseries } from './market-pulse-rental-timeseries';

export default [
  affordabilityTsForecast,
  affordabilityTsHistorical,
  componentMget,
  details,
  hcri,
  hpiTsForecast,
  hpiTsHistorical,
  rpiTsForecast,
  rpiTsHistorical,
  marketPulseLatest,
  marketPulseTimeseries,
  marketPulseRentalLatest,
  marketPulseRentalTimeseries,
];
