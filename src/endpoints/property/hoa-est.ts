import { Endpoint, Level } from '../../types';

export const hoaEst: Endpoint = {
  version: 3,
  target: 'hoa_est',
  level: Level.property,
  summary: "Property's estimated HOA fees",
  description:
    "This endpoint allows you to determine the estimated value of annual HOA fees for a given subject property as determined by HouseCanary's proprietary algorithms. Our model also returns an estimated lower and higher range for the property's estimated HOA fees. Note: This is a v3 endpoint. Be sure to confirm the correct base url structure when calling this endpoint.",
  schema: {
    type: 'object',
    properties: {
      association_estimated: {
        type: 'object',
        properties: {
          annual_hoa_est: {
            type: 'integer',
            description:
              "Quantitatively derived value of the property's estimated annual hoa fees",
          },
          max_fee: {
            type: 'integer',
            description:
              "Quantitatively derived value of the property's estimated maximum hoa fees",
          },
          min_fee: {
            type: 'integer',
            description:
              "Quantitatively derived value of the property's estimated minimum hoa fees",
          },
          n_samples: {
            type: 'integer',
            description:
              'Number of reference properties used by our proprietary algorithm to determine estimated hoa fees',
          },
          subdivision: {
            type: 'string',
            description: 'Subdivision name',
          },
          subdivision_id: {
            type: 'string',
            description: 'Corresponding subdivision ID',
          },
        },
      },
    },
  },
};
