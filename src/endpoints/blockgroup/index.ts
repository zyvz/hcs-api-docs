import { componentMget } from './component-mget';
import { hcri } from './hcri';
import { rentalValueDistribution } from './rental-value-distribution';
import { valueDistribution } from './value-distribution';
import { valueTsForecast } from './value-ts-forecast';
import { valueTsHistorical } from './value-ts-historical';

export default [
  hcri,
  rentalValueDistribution,
  valueDistribution,
  valueTsForecast,
  valueTsHistorical,
  componentMget,
];
