import { Level, Endpoint } from '../../types';

export const valueWithinBlock: Endpoint = {
  target: 'value_within_block',
  level: Level.property,
  summary: 'Value distribution within block',
  description:
    "Shows where the property's value and value per sq ft are in the distribution of property values and values per sq ft within its block. If the optional parameters clientValue and clientValueSqft are given, the response will also show where the property's value and value per sq ft are in the distribution of property values and values per sq ft within its block.",
  customParams: [
    {
      name: 'client_value',
      in: 'query',
      description:
        'Dollar value supplied by the caller, to position within the distribution of property values within the block.',
      schema: {
        type: 'number',
        nullable: true,
      },
    },
    {
      name: 'client_value_sqft',
      in: 'query',
      description:
        'Dollar value per sq ft supplied by the caller, to position within the distribution of property values per sq ft within the block.',
      schema: {
        type: 'number',
        nullable: true,
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      property_type: {
        type: 'string',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        description: 'Type of property. Defaults to SFD.',
      },
      housecanary_value_percentile_range: {
        type: 'object',
        description: 'Percentile range information for the HouseCanary value.',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the range.',
          },
          high: {
            type: 'integer',
            description: 'High percentile of the range.',
          },
          low: {
            type: 'integer',
            description: 'Low percentile of the range.',
          },
        },
      },
      housecanary_value_sqft_percentile_range: {
        type: 'object',
        description: 'Percentile range information for the HouseCanary value.',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the range.',
          },
          high: {
            type: 'integer',
            description: 'High percentile of the range.',
          },
          low: {
            type: 'integer',
            description: 'Low percentile of the range.',
          },
        },
      },
      client_value_percentile_range: {
        type: 'object',
        nullable: true,
        description:
          'Percentile range information for the client-provided value.',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the range.',
          },
          high: {
            type: 'integer',
            description: 'High percentile of the range.',
          },
          low: {
            type: 'integer',
            description: 'Low percentile of the range.',
          },
        },
      },
      client_value_sqft_percentile_range: {
        type: 'object',
        nullable: true,
        description:
          'Percentile range information for the client-provided value per square foot.',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the range.',
          },
          high: {
            type: 'integer',
            description: 'High percentile of the range.',
          },
          low: {
            type: 'integer',
            description: 'Low percentile of the range.',
          },
        },
      },
    },
  },
};
