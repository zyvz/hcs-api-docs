import { OpenAPIV3 } from 'openapi-types';
import { Level } from '../types';
import { block } from './block';
import { property } from './property';
import { blockgroup } from './blockgroup';
import { zipcode } from './zipcode';
import { metrodiv } from './metrodiv';
import { msa } from './msa';
import { state } from './state';
export { api as apiResponse } from './api';
export { errorResponses } from './errors';
export { sharedHcriSchemaProperties } from './shared';

export const RESPONSE_LEVEL_SCHEMA_MAP: Record<Level, OpenAPIV3.SchemaObject> =
  {
    [Level.property]: property,
    [Level.block]: block,
    [Level.blockgroup]: blockgroup,
    [Level.zip]: zipcode,
    [Level.metrodiv]: metrodiv,
    [Level.msa]: msa,
    [Level.state]: state,
  };

export const RESPONSE_LEVEL_KEY: Record<Level, string> = {
  [Level.property]: 'address_info',
  [Level.block]: 'block_info',
  [Level.blockgroup]: 'blockgroup_info',
  [Level.zip]: 'zipcode_info',
  [Level.metrodiv]: 'metrodiv_info',
  [Level.msa]: 'msa_info',
  [Level.state]: 'state_info',
};

export const RESPONSE_SCHEMAS: Record<string, OpenAPIV3.SchemaObject> = {
  [RESPONSE_LEVEL_KEY[Level.property]]: property,
  [RESPONSE_LEVEL_KEY[Level.block]]: block,
  [RESPONSE_LEVEL_KEY[Level.blockgroup]]: blockgroup,
  [RESPONSE_LEVEL_KEY[Level.zip]]: zipcode,
  [RESPONSE_LEVEL_KEY[Level.metrodiv]]: metrodiv,
  [RESPONSE_LEVEL_KEY[Level.msa]]: msa,
  [RESPONSE_LEVEL_KEY[Level.state]]: state,
};
