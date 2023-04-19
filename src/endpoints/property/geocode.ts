import { Level, Endpoint } from '../../types';

export const geocode: Endpoint = {
  target: 'geocode',
  level: Level.property,
  summary: 'Full geocoder response',
  description: `This endpoint returns a full geocoder response in the address_info section. The status section provides detail on how the requested address was resolved to a canonical address in HouseCanary's systems, or detail on problems encountered while attempting resolution.`,
  schema: {
    type: 'boolean',
  },
};
