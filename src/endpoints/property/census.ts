import { Level, Endpoint } from '../../types';

export const census: Endpoint = {
  target: 'census',
  level: Level.property,
  summary: 'Census data with resolution details',
  description: `This endpoint returns a full census response in the census section. The status section provides detail on how the requested address was resolved to a canonical address in HouseCanary's systems, or detail on problems encountered while attempting resolution.`,
  schema: {
    type: 'object',
    properties: {
      msa: {
        type: 'string',
        example: '41860',
      },
      msa_name: {
        type: 'string',
        example: 'San Francisco-Oakland-Hayward, CA',
      },
      tribal_land: {
        type: 'string',
        nullable: true,
        description: 'Whether the property is on US-recognized tribal land',
      },
      tract: {
        type: 'string',
        example: '060750201004',
        description: '11-digit 2010 US-census tract number',
      },
      block: {
        type: 'string',
        example: '060750313013007',
        description: '15-digit US-census block ID',
      },
      blockgroup: {
        type: 'string',
        example: '060750201004',
        description: '12-digit US-census block group ID',
      },
      county_name: {
        type: 'string',
        example: 'San Francisco',
        description: 'The name of the county in which the property is located',
      },
      fips: {
        type: 'string',
        example: '06075',
        description:
          '5-digit US-census FIPS code for the county in which the property is located',
      },
    },
  },
};
