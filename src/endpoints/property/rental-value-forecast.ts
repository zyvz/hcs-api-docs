import { Endpoint, Level } from '../../types';

export const rentalValueForecast: Endpoint = {
  target: 'rental_value_forecast',
  level: Level.property,
  summary: 'Forecast rental values',
  description:
    "This endpoint returns HouseCanary proprietary rental value forecasts. Rental values are forecast 1 year into the future using HouseCanary's home rental values and rental price index (RPI) at a ZIP code level. The response includes forecasted rental value information for 3, 6, and 12 months with ZIP level Rental Price Index.",
  schema: {
    type: 'object',
    properties: {
      month_03: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          properties: {
            value: {
              type: 'integer',
              description:
                'HouseCanary forecasted rental value within the 3 month time-period',
            },
            rpi: {
              type: 'integer',
              description:
                'Rental Price Index for the ZIP code in the 3 month time-period',
            },
            growth: {
              type: 'number',
              description:
                'Forecasted % growth (decline) at 3 months into the future',
            },
          },
        },
        description:
          'Forecasted rental value information for 3 months with ZIP level Rental Price Index',
      },
      month_06: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          properties: {
            value: {
              type: 'integer',
              description:
                'HouseCanary forecasted rental value within the 6 month time-period',
            },
            rpi: {
              type: 'integer',
              description:
                'Rental Price Index for the ZIP code in the 6 month time-period',
            },
            growth: {
              type: 'number',
              description:
                'Forecasted % growth (decline) at 6 months into the future',
            },
          },
        },
        description:
          'Forecasted rental value information for 6 months with ZIP level Rental Price Index',
      },
      month_12: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          properties: {
            value: {
              type: 'integer',
              description:
                'HouseCanary forecasted rental value within the 12 month time-period',
            },
            rpi: {
              type: 'integer',
              description:
                'Rental Price Index for the ZIP code in the 12 month time-period',
            },
            growth: {
              type: 'number',
              description:
                'Forecasted % growth (decline) at 12 months into the future',
            },
          },
        },
        description:
          'Forecasted rental value information for 12 months with ZIP level Rental Price Index',
      },
    },
  },
};
