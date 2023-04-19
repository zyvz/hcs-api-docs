import { Level, Endpoint } from '../../types';

export const marketGrade: Endpoint = {
  target: 'market_grade',
  level: Level.zip,
  summary: 'Market quality grade',
  description:
    'Market grade is a HouseCanary proprietary metric that combines multiple data points to provide a single grade for the ZIP code.',
  schema: {
    type: 'object',
    properties: {
      market_grade: {
        type: 'string',
        enum: ['A', 'B', 'C', 'D', 'F'],
        description:
          'Grade derived from a HouseCanary proprietary cluster algorithm. One of [A, B, C, D, F] with A being least volatile across market cycles and F being most volatile.',
      },
    },
  },
};
