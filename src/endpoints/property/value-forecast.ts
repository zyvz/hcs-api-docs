import { Level, Endpoint } from '../../types';

export const valueForecast: Endpoint = {
  summary: 'Forecasted home values',
  description:
    "Home values are forecast 3 years into the future using HouseCanary's AVM values and home price index (HPI) at a zip code level. Fields include forecast % growth (decline) at the following monthly intervals into the future: 3, 6, 12, 18, 24, 30 and 36.",
  target: 'value_forecast',
  level: Level.property,
  schema: {
    type: 'object',
    properties: {
      month_03: {
        type: 'object',
        description:
          'Forecasted value information for 3 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 3 month period',
          },
        },
      },
      month_06: {
        type: 'object',
        description:
          'Forecasted value information for 6 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 6 month period',
          },
        },
      },
      month_12: {
        type: 'object',
        description:
          'Forecasted value information for 12 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 12 month period',
          },
        },
      },
      month_18: {
        type: 'object',
        description:
          'Forecasted value information for 18 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 18 month period',
          },
        },
      },
      month_24: {
        type: 'object',
        description:
          'Forecasted value information for 24 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 24 month period',
          },
        },
      },
      month_30: {
        type: 'object',
        description:
          'Forecasted value information for 30 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 30 month period',
          },
        },
      },
      month_36: {
        type: 'object',
        description:
          'Forecasted value information for 36 months with ZIP level Home Price Index',
        properties: {
          value: {
            type: 'integer',
            description:
              'HouseCanary forecasted value within the 30 month period',
          },
        },
      },
    },
  },
};
