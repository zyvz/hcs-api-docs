import { Level, Endpoint } from '../../types';
import { sharedHcriSchemaProperties } from '../../responses';

export const hcri: Endpoint = {
  target: 'hcri',
  level: Level.block,
  summary: 'Aggregated gross rental yield',
  description:
    'Gross rental yield is calculated per-property as the monthly rental AVM * 12 / sale price AVM.',
  customParams: [
    {
      name: 'property_type',
      in: 'query',
      description: 'Desired property type to aggregate. Defaults to SFD.',
      schema: {
        type: 'string',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      property_type: {
        type: 'string',
        description:
          'Type of property specified in the request. Defaults to SFD.',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
      ...sharedHcriSchemaProperties,
    },
  },
};
