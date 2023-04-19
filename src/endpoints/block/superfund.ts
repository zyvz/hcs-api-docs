import { Level, Endpoint } from '../../types';

export const superfund: Endpoint = {
  target: 'superfund',
  level: Level.block,
  summary: 'Toxic contamination sites near block',
  description:
    'This endpoint provides information on federally-designated toxic contamination cleanup sites near the block. The data is sourced from the Agency for Toxic Substances and Disease Registry. It includes information on Superfund sites located on the property, within 1 mile of the property, and within 4 miles of the property, as well as the count of Superfund sites in the area and specific details for each site (if any).',
  schema: {
    type: 'object',
    properties: {
      within_miles_0: {
        type: 'object',
        description:
          'Superfund sites that the property is located on (if any).',
      },
      within_miles_1: {
        type: 'object',
        description: 'Superfund sites within 1 mile of the property (if any).',
      },
      within_miles_4: {
        type: 'object',
        description: 'Superfund sites within 4 miles of the property (if any).',
      },
      count: {
        type: 'integer',
        description: 'Number of Superfund sites in the area.',
      },
      detail: {
        type: 'array',
        description: 'Specifics for each Superfund site in the area (if any).',
        items: {
          type: 'object',
          properties: {
            site_name: {
              type: 'string',
              description: 'Official name of the Superfund site.',
            },
            epa_site_id: {
              type: 'string',
              description: 'Official ID of the Superfund site.',
            },
            link: {
              type: 'string',
              description: 'URL for site details hosted by the EPA.',
            },
            npl_status: {
              type: 'string',
              description:
                'Status of the site on the National Priorities List.',
            },
            updated_date: {
              type: 'string',
              description: 'Date when the site entry was last modified.',
            },
          },
        },
      },
    },
  },
};
