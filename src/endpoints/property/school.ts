import { Level, Endpoint } from '../../types';

export const school: Endpoint = {
  target: 'school',
  level: Level.property,
  summary: 'Information about nearby schools',
  description:
    'Information about nearby schools, including school name, address, phone, education level, score, city, state, ZIP code, and more. Sources include HouseCanary calculations and state standard school testing.',
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        school: {
          type: 'string',
          description: 'Level of school.',
          example: 'elementary',
          enum: ['elementary', 'middle', 'high'],
        },
        city: {
          type: 'string',
          description: 'School city',
        },
        state: {
          type: 'string',
          description: 'School state',
        },
        verified_school_boundaries: {
          type: 'boolean',
          description:
            'True if school boundaries could be verified, false otherwise',
        },
        name: {
          type: 'string',
          description: 'School name',
        },
        zipcode: {
          type: 'string',
          description: 'School ZIP code',
        },
        phone: {
          type: 'string',
          description: 'School phone number',
        },
        score: {
          type: 'number',
          description:
            'Overall school ranking as a percentile within schools in the state',
        },
        education_level: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['elementary', 'middle', 'high'],
          },
          description:
            'List of all education levels incorporated by the school. Any combination of [elementary, middle, high]',
        },
        address: {
          type: 'string',
          description: 'School address',
        },
        assessment_year: {
          type: 'integer',
          description:
            "Year of the school's last assessment by the state. Null if not available",
        },
      },
    },
  },
};
