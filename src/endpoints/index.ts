import propertyEndpoints from './property';
import blockEndpoints from './block';
import blockgroupEndpoints from './blockgroup';
import zipEndpoints from './zipcode';
import metrodivEndpoints from './metrodiv';
import msaEndpoints from './msa';
import stateEndpoints from './state';

export default [
  ...propertyEndpoints,
  ...blockEndpoints,
  ...blockgroupEndpoints,
  ...zipEndpoints,
  ...metrodivEndpoints,
  ...msaEndpoints,
  ...stateEndpoints,
];
