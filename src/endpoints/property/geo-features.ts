import { Endpoint, Level } from '../../types';

export const geoFeatures: Endpoint = {
  target: 'geo_features',
  level: Level.property,
  summary: 'Geographic attributes of property',
  description:
    'This endpoint provides geographic attributes of the property, including backyard exposure angle, backyard slope, backyard view angle, elevation, frontage length, orientation, privacy score by blockgroup and county, and view angle.',
  schema: {
    type: 'object',
    properties: {
      backyard_exposure_angle: {
        type: 'integer',
        description:
          'Measurement of how easily neighbors can see into the property and backyard, thus potentially mitigating privacy. Value is the angle (in degrees) exposed to backyard neighbors. Values range from 0 to 180.',
      },
      backyard_slope: {
        type: 'integer',
        description:
          'The slope (in degrees) along the centerline of the backyard view angle. Values range from -90 to 90. Negative values indicate downhill views, 0 is horizontal, and positive values indicate uphill views.',
      },
      backyard_view_angle: {
        type: 'integer',
        description:
          'Measurement of maximum angle (in degrees) that opens up to scenery or nature from the backyard. Values range from 0 to 180.',
      },
      elevation: {
        type: 'integer',
        description:
          'The height (in meters) of a property in relation to sea level.',
      },
      frontage_length: {
        type: 'integer',
        description: 'The length (in feet) of the parcel frontage.',
      },
      orientation: {
        type: 'integer',
        description:
          'Direction (in degrees) that the front of the house faces.',
      },
      privacy_score_blockgroup: {
        type: 'integer',
        description:
          'HouseCanary proprietary summary of the geographic attributes of a parcel relative to other parcels in the census blockgroup. Values range from 0 to 100. Higher values indicate greater privacy.',
      },
      privacy_score_county: {
        type: 'integer',
        description:
          'HouseCanary proprietary summary of the geographic attributes of a parcel relative to other parcels in the county. Values range from 0 to 100. Higher values indicate greater privacy.',
      },
      view_angle: {
        type: 'integer',
        description:
          'Maximum angle (in degrees) that one can view the surrounding area by standing at the center of a parcel. Values range from 0 to 360.',
        minimum: 0,
        maximum: 360,
      },
    },
  },
};
