import { affordabilityTsForecast } from './affordability-ts-forecast';
import { affordabilityTsHistorical } from './affordability-ts-historical';
import { hcri } from './hcri';
import { hpiTsForecast } from './hpi-ts-forecast';
import { hpiTsHistorical } from './hpi-ts-historical';
import { rpiTsForecast } from './rpi-ts-forecast';
import { rpiTsHistorical } from './rpi-ts-historical';
import { componentMget } from './component-mget';
import { marketPulseRentalLatest } from './market-pulse-rental-latest';
import { marketPulseRentalTimeseries } from './market-pulse-rental-timeseries';
import { marketPulseLatest } from './market-pulse-latest';
import { marketPulseTimeseries } from './market-pulse-timeseries';

export default [
  affordabilityTsForecast,
  affordabilityTsHistorical,
  hcri,
  hpiTsForecast,
  hpiTsHistorical,
  rpiTsForecast,
  rpiTsHistorical,
  marketPulseRentalLatest,
  marketPulseRentalTimeseries,
  marketPulseLatest,
  marketPulseTimeseries,
  componentMget,
];
