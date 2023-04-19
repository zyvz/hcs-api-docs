import { Endpoint, Level } from '../../types';
import { OpenAPIV3 } from 'openapi-types';

export const rentalValueWithinBlock: Endpoint = {
  target: 'rental_value_within_block',
  level: Level.property,
  summary: 'Property rental value distribution',
  description:
    "This endpoint provides information on where the property's rental value and value per sq ft are in the distribution of property rental values and values per sq ft within its block. The endpoint accepts optional client-supplied rental value and value per sq ft values to position them within the distribution of rental property values and values per sq ft within the block.",
  customParams: [
    {
      name: 'client_value',
      in: 'query',
      description:
        'Dollar value supplied by the caller, to position within the distribution of rental property values within the block.',
      schema: {
        type: 'integer',
        nullable: true,
        default: null,
      },
    },
    {
      name: 'client_value_sqft',
      in: 'query',
      description:
        'Dollar value per sq ft supplied by the caller, to position within the distribution of rental property values per sq ft within the block.',
      schema: {
        type: 'integer',
        nullable: true,
        default: null,
      },
    },
  ],
  schema: {
    type: 'object',
    properties: {
      property_type: {
        type: 'string',
        description:
          'Type of property. Defaults to SFD. One of [SFD, TH,CND, INC, MFH]',
        enum: ['SFD', 'TH', 'CND', 'INC', 'MFH'],
        default: 'SFD',
      },
      housecanary_value_percentile_range: {
        type: 'object',
        additionalProperties: {
          type: 'integer',
        },
        description:
          'Percentile range information for the HouseCanary rental value',
      },
      housecanary_value_sqft_percentile_range: {
        type: 'object',
        additionalProperties: {
          type: 'integer',
        },
        description:
          'Percentile range information for the HouseCanary rental value per square foot',
      },
      client_value_percentile_range: {
        type: 'string',
        description:
          'Percentile range information for the client-provided rental value',
      },
      client_value_sqft_percentile_range: {
        type: 'object',
        additionalProperties: {
          type: 'integer',
        },
        description:
          'Percentile range information for the client-provided rental value per square foot',
      },
      name: {
        type: 'string',
        description: 'Name of the range',
      },
      high: {
        type: 'integer',
        description: 'High percentile of the range',
      },
      low: {
        type: 'integer',
        description: 'Low percentile of the range',
      },
    },
  },
};
