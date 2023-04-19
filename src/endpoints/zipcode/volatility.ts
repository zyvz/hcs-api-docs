import { Level, Endpoint } from '../../types';

export const volatility: Endpoint = {
  target: 'volatility',
  level: Level.zip,
  summary: 'Market volatility',
  description:
    'HouseCanary proprietary metrics that identify the market volatility for the local zip code based on HouseCanary home price index (HPI). Metrics include beta, Sharpe ratio, Modigliani-Modigliani risk-adjusted return for the local zip code.',
  schema: {
    type: 'object',
    properties: {
      beta: {
        type: 'number',
        description:
          "Beta is a measure of the volatility, or systematic risk, of a security or a portfolio in comparison to the market as a whole. Beta is calculated by comparing the security's or portfolio's price movement to the movement of the market index. A beta of 1 indicates that the security's price moves with the market. A beta above 1 indicates that the security's price is more volatile than the market, while a beta below 1 indicates that the security's price is less volatile than the market.",
      },
      sharpe_ratio: {
        type: 'number',
        description:
          'Sharpe ratio is a measure for calculating risk-adjusted return. It is the average return earned in excess of the risk-free rate per unit of volatility or total risk. A high Sharpe ratio indicates that the risk-adjusted return is high. A low Sharpe ratio indicates that the risk-adjusted return is low.',
      },
      modigliani_risk_adjusted_return: {
        type: 'number',
        description:
          'Measure of volatility in zip HPI relative to national HPI. Values greater than 1 indicate that zip HPI is more volatile.',
        maximum: 1,
        minimum: -1,
      },
    },
  },
};
