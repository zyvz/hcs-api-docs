import { Endpoint, Level } from '../../types';

export const rpiForecast: Endpoint = {
  target: 'rpi_forecast',
  level: Level.zip,
  summary: 'Forecasted rental price index (RPI)',
  description:
    'HouseCanary proprietary metrics identifying forecasted rental returns for the local ZIP code based on HouseCanary rental price index (RPI).',
  schema: {
    type: 'object',
    properties: {
      returns_12mo_f: {
        type: 'number',
        description:
          'Forecast rental value appreciation for the next 12 months based on HPI forecast',
      },
      max_12mo_loss: {
        type: 'number',
        description:
          'Historical max percent loss in RPI over a 12 month period',
      },
      risk_12mo_loss: {
        type: 'number',
        description:
          "Probability that this market's RPI will be lower 12 months from now than the current RPI",
      },
    },
  },
};
