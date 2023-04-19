import { affordabilityTsForecast } from './affordability-ts-forecast';
import { affordabilityTsHistorical } from './affordability-ts-historical';
import { zipDetails } from './details';
import { hcri } from './hcri';
import { hpiForecast } from './hpi-forecast';
import { hpiHistorical } from './hpi-historical';
import { hpiTsForecast } from './hpi-ts-forecast';
import { hpiTsHistorical } from './hpi-ts-historical';
import { marketGrade } from './market-grade';
import { rpiForecast } from './rpi-forecast';
import { rpiHistorical } from './rpi-historical';
import { rpiTsForecast } from './rpi-ts-forecast';
import { rpiTsHistorical } from './rpi-ts-historical';
import { volatility } from './volatility';
import { marketPulseLatest } from './market-pulse-latest';
import { marketPulseTimeseries } from './market-pulse-timeseries';
import { componentMget } from './component-mget';

export default [
  affordabilityTsForecast,
  affordabilityTsHistorical,
  componentMget,
  zipDetails,
  hcri,
  hpiForecast,
  hpiHistorical,
  hpiTsForecast,
  hpiTsHistorical,
  marketGrade,
  marketPulseLatest,
  marketPulseTimeseries,
  rpiForecast,
  rpiHistorical,
  rpiTsForecast,
  rpiTsHistorical,
  volatility,
];
