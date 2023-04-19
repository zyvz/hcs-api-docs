import { Level, Endpoint } from '../../types';

export const valueDistribution: Endpoint = {
  target: 'value_distribution',
  level: Level.blockgroup,
  summary: 'Property value distribution',
  description:
    'This endpoint provides a distribution summary of property dollar values and dollar values per sq ft within the block. It includes maximum, minimum, mean, standard deviation, count, as well as 5-, 25-, 50-, 75-, and 90-percentiles. You can specify a desired property type using the `property_type` request parameter. The default is SFD.',
  customParams: [
    {
      name: 'property_type',
      in: 'query',
      description:
        'Desired property type to aggregate. Defaults to SFD. One of ["SFD", "TH", "CND", "INC", "MFH"].',
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
          'Type of property specified in the request. Defaults to SFD. One of ["SFD", "TH", "CND", "INC", "MFH"].',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
      value_5: {
        type: 'number',
        description: 'Price at the 5th percentile.',
      },
      value_25: {
        type: 'number',
        description: 'Price at the 25th percentile.',
      },
      value_50: {
        type: 'number',
        description: 'Median price.',
      },
      value_75: {
        type: 'number',
        description: 'Price at the 75th percentile.',
      },
      value_95: {
        type: 'number',
        description: 'Price at the 95th percentile.',
      },
      value_min: {
        type: 'integer',
        description: 'Minimum price.',
      },
      value_max: {
        type: 'integer',
        description: 'Maximum price.',
      },
      value_mean: {
        type: 'number',
        description: 'Mean price.',
      },
      value_sd: {
        type: 'number',
        description: 'Standard deviation of prices.',
      },
      value_count: {
        type: 'integer',
        description: 'Number of properties.',
      },
      value_per_sqft_5: {
        type: 'number',
        description: 'Price per sq ft at the 5th percentile.',
      },
      value_per_sqft_25: {
        type: 'number',
        description: 'Price per sq ft at the 25th percentile.',
      },
      value_per_sqft_50: {
        type: 'number',
        description: 'Median price per sq ft.',
      },
      value_per_sqft_75: {
        type: 'number',
        description: 'Price per sq ft at the 75th percentile.',
      },
      value_per_sqft_95: {
        type: 'number',
        description: 'Price per sq ft at the 95th percentile.',
      },
      value_per_sqft_min: {
        type: 'number',
        description: 'Minimum price per sq ft.',
      },
      value_per_sqft_max: {
        type: 'number',
        description: 'Maximum price per sq ft.',
      },
      value_per_sqft_mean: {
        type: 'number',
        description: 'Mean price per sq ft.',
      },
      value_per_sqft_sd: {
        type: 'number',
        description: 'Standard deviation of price per sq ft.',
      },
      value_per_sqft_count: {
        type: 'integer',
        description: 'Number of properties.',
      },
    },
  },
};
