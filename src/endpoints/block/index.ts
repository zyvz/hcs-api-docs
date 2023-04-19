import { componentMget } from './component-mget';
import { crime } from './crime';
import { hazardEarthquake } from './hazard-earthquake';
import { hazardHail } from './hazard-hail';
import { hazardHurricane } from './hazard-hurricane';
import { hazardTornado } from './hazard-tornado';
import { hazardWind } from './hazard-wind';
import { hcri } from './hcri';
import { rentalValueDistribution } from './rental-value-distribution';
import { superfund } from './superfund';
import { valueDistribution } from './value-distribution';
import { valueTsForecast } from './value-ts-forecast';
import { valueTsHistorical } from './value-ts-historical';

export default [
  componentMget,
  crime,
  hazardEarthquake,
  hazardHail,
  hazardHurricane,
  hazardTornado,
  hazardWind,
  hcri,
  rentalValueDistribution,
  superfund,
  valueDistribution,
  valueTsForecast,
  valueTsHistorical,
];
