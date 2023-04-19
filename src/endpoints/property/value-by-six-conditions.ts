import { Endpoint, Level } from '../../types';

export const valueBySixConditions: Endpoint = {
  target: 'value_by_six_conditions',
  level: Level.property,
  summary: 'Condition class values',
  description:
    'Each condition class corresponds to the standardized C1 through C6 [condition rating scale](https://selling-guide.fanniemae.com/Underwriting-Property-Projects/Appraisal-Requirements/Appraisal-Report-Assessment/Property-Condition-Construction-Quality/1104684711/What-are-the-property-condition-ratings-used-by-the-appraiser.htm) that conforms to UAD guidelines. Values at each condition level are determined based on local market conditions and are determined through a mix of computer vision and statistical modeling.',
  schema: {
    type: 'object',
    properties: {
      price_mean: {
        type: 'integer',
        description:
          'Same value that is provided as part of the property/value response',
      },
      price_upr: {
        type: 'integer',
        description:
          'Same value that is provided as part of the property/value response',
      },
      price_lwr: {
        type: 'integer',
        description:
          'Same value that is provided as part of the property/value response',
      },
      fsd: {
        type: 'number',
        description:
          'Same value that is provided as part of the property/value response',
      },
      price_at_cond_0: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the lowest condition rating of C6',
      },
      price_at_cond_1: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the condition rating of C5',
      },
      price_at_cond_2: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the condition rating of C4',
      },
      price_at_cond_3: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the condition rating of C3',
      },
      price_at_cond_4: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the condition rating of C2',
      },
      price_at_cond_5: {
        type: 'integer',
        description:
          'Quantitatively derived value of the property at the highest condition rating of C1',
      },
      condition_class: {
        type: 'string',
        enum: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
        description:
          'The current condition rating of the property as determined by HouseCanary. The standardized condition rating (C1 through C6) conforms to the UAD guidelines for determining condition.',
      },
    },
  },
};
