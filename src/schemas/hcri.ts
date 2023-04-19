import { OpenAPIV3 } from 'openapi-types';

export const hcriSchema: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    gross_yield_count: {
      type: 'integer',
      description: 'Count of the properties that contributed to the index',
    },
    gross_yield_median: {
      type: 'number',
      description: 'Median gross yield value',
    },
    gross_yield_average: {
      type: 'number',
      description: 'Average gross yield value',
    },
  },
};
