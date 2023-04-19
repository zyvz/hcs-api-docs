import { Level, Endpoint } from '../../types';

export const flood: Endpoint = {
  target: 'flood',
  level: Level.property,
  summary: 'Flood risk level and zone',
  description: `Flood risk information from the FEMA Flood Map Center. The API returns the flood risk level, flood zone, panel number and the date the flood risk assessment took effect.`,
  schema: {
    type: 'object',
    properties: {
      effective_date: {
        type: 'string',
        format: 'date',
        description:
          'Date the flood risk assessment took effect (in ISO format)',
      },
      flood_risk: {
        type: 'string',
        description: 'Level of flood risk',
      },
      zone: {
        type: 'string',
        description: 'Flood zone the property is in. Zone descriptions',
      },
      panel_number: {
        type: 'string',
        description: 'Flood map panel number that includes the property',
      },
    },
  },
};
