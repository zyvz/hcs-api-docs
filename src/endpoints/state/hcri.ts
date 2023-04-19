import { Endpoint, Level } from '../../types';
import { sharedHcriSchemaProperties } from '../../responses';

export const hcri: Endpoint = {
  target: 'hcri',
  level: Level.state,
  summary: 'Aggregated gross rental yield',
  description:
    'Gross rental yield is calculated per-property as the monthly rental AVM * 12 / sale price AVM.',
  schema: {
    type: 'object',
    properties: sharedHcriSchemaProperties,
  },
};
