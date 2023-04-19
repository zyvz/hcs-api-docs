import { OpenAPIV3 } from 'openapi-types';

export const errorResponses: OpenAPIV3.ResponsesObject = {
  BadRequest: {
    description: `
        If one or more required fields for an endpoint are missing in the request, a 400 Bad Request status code will be returned, and the response body will contain an explanation of the error.

        A common reason for a 400 response is missing required query parameters.

        We do not charge for requests that result in a response with a 400 status code.
      `,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'object',
              properties: {
                address: {
                  type: 'string',
                  example: 'Missing required parameter in the query string',
                },
              },
            },
          },
        },
      },
    },
  },
  Unauthorized: {
    description: `
        In the case of authentication failure, a 401 Unauthorized status code will be returned.

        *Note: In the case of an authentication failure, the system will return a 401 without any explanation or description. Should you have any questions on an auth failure, please contact [HouseCanary technical support](https://support.housecanary.com).*

        We do not charge for requests that result in a response with a 401 status code.
      `,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Authentication Failed',
            },
            code: {
              type: 'integer',
              example: 401,
            },
          },
        },
      },
    },
  },
  RateLimitExceeded: {
    description: `
        If your organization has made all the component requests allowed under your organization's rate limit, a \`429 Too Many Requests\` status code will be returned. If you run into this error, you must wait until the UTC epoch time returned in the \`X-RateLimit-Reset header\`. If you need a large volume of data, HouseCanary is able to support *significantly* higher rate limits for enterprise customers. [Contact us](https://support.housecanary.com) for more details.

        We do not charge for requests that result in a response with a 429 status code.
      `,
    headers: {
      'X-RateLimit-Limit': {
        schema: {
          type: 'integer',
          example: 250,
        },
      },
      'X-RateLimit-Remaining': {
        schema: {
          type: 'integer',
          example: 0,
        },
      },
      'X-RateLimit-Reset': {
        schema: {
          type: 'integer',
          example: 1525462154,
        },
      },
      'X-RateLimit-Period': {
        schema: {
          type: 'integer',
          example: 60,
        },
      },
    },
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Too Many Requests',
            },
          },
        },
      },
    },
  },
};
