import { Endpoint, Level } from '../../types';

export const ownerOccupied: Endpoint = {
  target: 'owner_occupied',
  level: Level.property,
  summary: 'Matched property address is owner-occupied',
  description:
    'This endpoint identifies whether the property is owner-occupied by matching the property address against the mailing address for associated property taxes. If the addresses match, the property is considered owner-occupied.',
  schema: {
    type: 'object',
    properties: {
      owner_occupied: {
        type: 'boolean',
        description:
          'Whether the property address matches the mailing address for associated property taxes',
      },
    },
  },
};
