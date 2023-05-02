# HouseCanary Analytics API Documentation

Welcome to the [HouseCanary Analytics API](https://www.housecanary.com/products/data-points/)! You can use the HouseCanary Analytics API to access HouseCanary's proprietary analytics as well as public records data.

## Making Requests

### URL structure

The HouseCanary API is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer).

Each request URL has a form: `{BASE}/{ENDPOINT}`

The base URL of the API is https://api.housecanary.com

Each endpoint follows the form: `{VERSION}/{LEVEL}/{TARGET}`, where `{VERSION}` is either v2 or v3, and where `{LEVEL}` is one of:

| Level      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| property   | Individual property: a building or a unit within a building |
| block      | US-census block                                             |
| blockgroup | US-census block group                                       |
| zip        | US zipcode                                                  |
| metrodiv   | US-census Metropolitan Division                             |
| msa        | US-census Metropolitan Statistical Area                     |
| state      | US State                                                    |

and `{TARGET}` is the data descriptor such as `value`, `rental_value`, `details`, etc.

Note that while most HouseCanary endpoints are v2 urls, there are a few new endpoints that utilize v3. Be sure to check each endpoint's documentation to confirm the correct base URL structure and version.

**Example (v2):** `https://api.housecanary.com/v2/property/value` has the version `v2`, level `property`, and a target of `value`, which comprise an endpoint `v2/property/value`.

**Example (v3):** `https://api.housecanary.com/v3/property/hoa_est` has the version `v3`, level `property`, and a target of `hoa_est`, which comprise an endpoint `v3/property/hoa_est`.

For brevity, we will skip the base URL in most of this document. If the shown URL starts with the slash, the corresponding full URL can always be obtained by prepending it with the base URL.

### Requests

Each request URL allows accessing data for items that belong to the URL's [level](#url-structure). Items can be specified by these [identifiers](#levels-and-identifiers).

- Data for a single item can be retrieved with a [`GET` request](#get-requests) by specifying item identifiers in the query string.
- Data for multiple items can be retrieved in bulk using a single [`POST` request](#post-requests) by specifying a sequence of item identifiers in the JSON-encoded body.

In both cases, the requested items are always members of the same level, that of the URL.

### Responses

The responses to both `GET` and `POST` requests are JSON arrays representing the sequence of data chunks, one chunk for each requested item, preserving the request sequence order:

- A response to the [`GET` request](#get-requests) will contain a single chunk, because the single item was requested.
- A response to the [`POST` request](#post-requests) will contain as many chunks as there were items in the requested sequence.

## Authentication

In order to use the HouseCanary API, you must obtain a credentials pair (`API Key`, `API Secret`) from your [settings page](https://platform.housecanary.com/api-settings).

Authentication of API requests is made using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). Use your `API Key` as the user name and your `API Secret` as the password for Basic Authentication. HTTPS must be used for all API requests. See the full request examples below that show how to authenticate with the API in various programming languages.

For Authentication failure information, see [here](#401-authentication-failures).

### Test Credentials

Test credentials are useful for verifying functionality in a development or staging environment. In order to generate test credentials (`API Key`, `API Secret`), go to your [settings page](https://platform.housecanary.com/api-settings) and use the “New Test API Key” link.

Your test credentials can be used to make test requests. The HouseCanary API maintains a whitelist of items that can be used in test requests. For more information on retrieving this whitelist, see [here](#test-lists).

## Permissions

To use the HouseCanary Analytics API, your user account must have permissions enabled for all API components that you want to access. You can check which components you have enabled in the “Analytics API” section of the [API settings](https://platform.housecanary.com/api-settings). If you have any questions about the components you have access to, contact [support](https://support.housecanary.com/).

## Levels and Identifiers

Different identifiers are used depending on the level of the URL. For example, properties are identified by their addresses, while residential blocks are identified by their census block IDs. The possible identifiers for each level are:

- `property`: any combination of `address`, `unit`, `state`, `city`, and `zipcode` that identifies the US address. Usually, this is `address` and `zipcode` or `address`, `city`, `state`. Also, a `slug` can be used.
- `block`: a `block_id`.
- `blockgroup`: a `blockgroup_id`.
- `zip`: a `zipcode`.
- `metrodiv`: a `metrodiv`.
- `msa`: an `msa`.
- `state`: a 2-letter acronym of the US state.

All possible identifiers and their descriptions are listed below:

| Identifier      | Description                                                                             | Example                                 |
| --------------- | --------------------------------------------------------------------------------------- | --------------------------------------- |
| `address`       | Building number, street name, and optionally unit number                                | "123 Main St"                           |
| `unit`          | Unit number for the property, if needed and not already specified in the address string | "Unit 3"                                |
| `city`          | City for the property                                                                   | "San Francisco"                         |
| `state`         | 2-letter acronym of the US state                                                        | "CA"                                    |
| `zipcode`       | Zipcode for the property                                                                | "94105"                                 |
| `slug`          | A single URL-safe string identifying the address (obtained from HouseCanary)            | "123-Example-St-San-Francisco-CA-94105" |
| `block_id`      | 15-digit census block ID                                                                | "060750615003005"                       |
| `blockgroup_id` | 12-digit census block group ID                                                          | "060750615003"                          |
| `metrodiv`      | 5-digit Metropolitan Division ID                                                        | "41884"                                 |
| `msa`           | 5-digit Metropolitan Statistical Area ID                                                | "41860"                                 |

## GET Requests

Using a `GET` request, you can retrieve data for a single item from an endpoint by specifying item identifiers in the query parameters.

### GET URL Format

`GET https://api.housecanary.com/{VERSION}/{ENDPOINT}?{IDENTIFIERS}`

- `{VERSION}` is the version relevant to the endpoint you are calling, either `v2` or `v3`.
- `{ENDPOINT}` is the specific endpoint you are calling, such as `property/value`.
- `{IDENTIFIERS}` is the URL-encoded string providing item identifiers as an ampersand-separated list of key=value pairs. Exact identifiers depend on the level of the URL, see [Levels and Identifiers](#levels-and-identifiers).

Example URL separated into constituent segments:

- `{BASE}: https://api.housecanary.com`
- `{VERSION}: v2/`
- `{ENDPOINT}: zip/details`
- `{IDENTIFIERS}: zipcode=01234`

Then, combined together:

`{BASE}/{ENDPOINT}?{IDENTIFIERS}`:

`https://api.housecanary.com/v2/zip/details?zipcode=01234`

Example GET URLs:

- `https://api.housecanary.com/v2/property/geocode?address=10216+N+Willow+Ave&zipcode=64157`
- `https://api.housecanary.com/v2/property/value?address=10216+N+Willow+Ave&zipcode=64157`
- `https://api.housecanary.com/v2/property/value?address=65239+Rosanne+Prairie+St&city=Bayardchester&state=CA`
- `https://api.housecanary.com/v2/property/rental_value?slug=65239-Rosanne-Prairie-Bayardchester-CA-90113`
- `https://api.housecanary.com/v2/block/value_distribution?block_id=012345678901234`
- `https://api.housecanary.com/v2/zip/details?zipcode=01234`
- `https://api.housecanary.com/v2/msa/hpi_ts?msa=09876`

## POST Requests

Using a POST request, you can retrieve data for multiple items by specifying a sequence of item identifiers in the POST body. We strongly recommend using POST requests for batching whenever possible.

_Note: POST requests are only supported for the Analytics API. Value Report, Rental Report, and Value Analysis do not support POST requests._

### POST URL Format

`POST https://api.housecanary.com/{VERSION}/{ENDPOINT}`

`{VERSION}` is the version relevant to the endpoint you are calling, either `v2` or `v3`.

`{ENDPOINT}` is the specific endpoint you are calling, such as `property/geocode`.

Example POST URL format:

- `https://api.housecanary.com/v2/property/geocode`
- `https://api.housecanary.com/v2/property/component_mget?components=property/details,property/value`

### POST Body

All POST requests must have the Content-Type header set to `application/json` and the POST body must be a valid json array representing a sequence of requested item identifiers.

There is a limit of 100 items per POST request (i.e. 100 address + zipcode combinations, or 100 block_ids).

All items in a single POST request must have the same set of keys. For property-level POST requests, either `address` or `slug` keys must be present for all items so HouseCanary can identify the specific properties.

Each item in the json array must contain one or more of the following keys:

| Level     | Key           | Required? | Description                                                                                                                                                                              | Value Example                           |
| --------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| property  | address       | No        | Building number, street name, and optionally unit number                                                                                                                                 | "123 Main St"                           |
| property  | unit          | No        | Unit number for the property, if needed and not already specified in the address string                                                                                                  | "Unit 3"                                |
| property  | city          | No        | City for the property                                                                                                                                                                    | "San Francisco"                         |
| property  | state         | No        | Either the full name or a 2-letter acronym of the US state                                                                                                                               | "CA"                                    |
| property  | zipcode       | No        | 5-digit ZIP code for the property                                                                                                                                                        | "94105"                                 |
| property  | slug          | No        | A single URL-safe string identifying the address (obtained from HouseCanary)                                                                                                             | "123-Example-St-San-Francisco-CA-94105" |
| block     | block_id      | Yes       | 15-digit census block ID                                                                                                                                                                 | "060750615003005"                       |
| block     | blockgroup_id | Yes       | 12-digit census block ID                                                                                                                                                                 | "060750615003"                          |
| zipcode   | zipcode       | Yes       | 5-digit ZIP code                                                                                                                                                                         | "94105"                                 |
| metrodiv  | metrodiv      | Yes       | 5-digit Metropolitan Division ID                                                                                                                                                         | "41884"                                 |
| msa       | msa           | Yes       | 5-digit MSA ID                                                                                                                                                                           | "41860"                                 |
| state     | state         | Yes       | Either the full name or a 2-letter acronym of the US state                                                                                                                               | "CA"                                    |
| any level | meta          | No        | A purely optional key whose value is an arbitrary string that gets returned along with the item in the response. Use this if desired for client-side item references, descriptions, etc. | "1"                                     |

Example POST body:

```
[
  {
    "address": "10216 N Willow Ave",
    "zipcode": "64157"
  },
  {
    "address": "34813 SE Burrows Way",
    "zipcode": "98065"
  }
]
```

## Rate Limits

There are limits on how many API requests can be made in a certain period of time. You can see rate limits for your account in API Settings.

| Endpoints      | Rate limit for self-serve customers | Rate limit for enterprise customers |
| -------------- | ----------------------------------- | ----------------------------------- |
| Analytics API  | 250 components per minute           | Custom                              |
| Value Report   | 10 requests per minute              | Custom                              |
| Rental Report  | 10 requests per minute              | Custom                              |
| Value Analysis | 10 requests per minute              | Custom                              |

Contact us or view API Settings for custom rate limits.

Rate limits differ between the Analytics API endpoints and the Value Report endpoints. Rate limits for the Analytics API are counted by the number of components called. One component is the combination of a specific endpoint with an address or other geographic level identifier. Value Report, Rental Report, and Value Analysis are rate limited based on number of HTTP requests in the time period.

### How different Analytics API requests count against the component rate limit:

GET property/geocode

- 1 endpoint
- Only accepts 1 address
- Counts as 1 component against the rate limit

GET property/component_mget with 2 endpoints specified

- 2 endpoints
- Only accepts 1 address
- Counts as 2 components against the rate limit

POST property/geocode with 3 addresses in the body

- 1 endpoint
- 3 addresses in the body
- Counts as 3 components against the rate limit

POST property/component_mget with 4 endpoints specified and 4 addresses in the body

- 4 endpoints
- 4 addresses in the body
- Counts as 16 components against the rate limit

Custom response headers are returned from the API to indicate rate limit information:

| Header Name           | Description                                                                                                                                         | Example Value |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| X-RateLimit-Period    | Comma separated values that define the rate limit windows, in seconds                                                                               | 60            |
| X-RateLimit-Limit     | Comma separated values that define the number of components or requests the consumer is permitted to make for each rate limit window                | 250           |
| X-RateLimit-Remaining | Comma separated values that indicate the number of components or requests remaining for each rate limit window                                      | 248           |
| X-RateLimit-Reset     | Comma separated values that indicate the time at which each rate limit window resets in [UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time) | 1525368621    |

## Security

TLS 1.0, 1.1 and 1.2 are supported. SSL is not supported.

## Test Lists

The following endpoints produce lists of items that can be used, in conjunction with your test credentials, to make test requests. Any item in the list will return valid data when passed to one of our endpoints.

**Please obtain the real lists of test items from the live endpoints. The example responses shown to the right do not contain valid test items.**

_Note: These endpoints only support GET requests._

### property level

_Request URL_

`https://api.housecanary.com/v2/property/test_addresses`

Example response:

```
[
   {
      "zipcode": "00000",
      "address": "120 Main St"
   },
   {
      "zipcode": "00000",
      "address": "121 Main St"
   }
]
```

### block level

_Request URL_

`https://api.housecanary.com/v2/block/test_block_ids`

Example response:

```
[
    "000000000000001",
    "000000000000002",
    "000000000000003",
    "000000000000004",
    "000000000000005"
]
```

### blockgroup level

_Request URL_

`https://api.housecanary.com/v2/blockgroup/test_blockgroup_ids`

Example response:

```
[
    "000000000001",
    "000000000002",
    "000000000003",
    "000000000004",
    "000000000005"
]
```

### zip level

_Request URL_

`https://api.housecanary.com/v2/zip/test_zipcodes`

Example response:

```
[
    "00001",
    "00002",
    "00003",
    "00004",
    "00005"
]
```

### metrodiv level

_Request URL_

`https://api.housecanary.com/v2/metrodiv/test_metrodivs`

Example response:

```
[
  {
    "metrodiv": "00001",
    "metrodiv_name": "Name of Metrodiv, ST"
  },
  {
    "metrodiv": "00002",
    "metrodiv_name": "Name of Metrodiv, ST"
  }
]
```

### msa level

_Request URL_

`https://api.housecanary.com/v2/msa/test_msas`

Example response:

```
[
  {
    "msa": "00001",
    "msa_name": "Name of Metropolitan-Statistical-Area, ST"
  },
  {
    "msa": "00001",
    "msa_name": "Name of Metropolitan-Statistical-Area, ST"
  }
]
```

### state level

_Request URL_

`https://api.housecanary.com/v2/state/test_states`

Example response:

```
[
    "CA",
    "NY",
    "TX",
    "AZ",
    "KY"
]
```

## Response Codes and Errors

The HouseCanary API is built leveraging the REST paradigm. Under normal conditions, the API will return a response with a 200 OK HTTP status code. If an error occurs, the response will contain the appropriate HTTP status code as described below.

### API Code and API Code Description

Because a single request can include multiple items or multiple endpoints, each response section returned in a normal 200 response will contain its own `api_code` and `api_code_description` fields. These are used to identify business logic errors for those items. The following values may be returned:

| API Code | API Code Description | Meaning                                  |
| -------- | -------------------- | ---------------------------------------- |
| 0        | ok                   | Successfully retrieved data for the item |
| 204      | no content           | Unable to retrieve data for the item     |

We do not charge for sections returned with a 204 `api_code`.

### 400 - Missing required fields or incorrect request structure

If one or more required fields for an endpoint are missing in the request, a 400 Bad Request status code will be returned, and the response body will contain an explanation of the error.

A common reason for a 400 response is missing required query parameters.

We do not charge for requests that result in a response with a 400 status code.

### 401 - Authentication failure

In the case of authentication failure, a _401 Unauthorized_ status code will be returned.

_Note: In the case of an authentication failure, the system will return a 401 without any explanation or description. Should you have any questions on an auth failure, please contact [HouseCanary technical support](https://support.housecanary.com/)._

We do not charge for requests that result in a response with a 401 status code.

### 429 - Rate limit hit

If your organization has made all the component requests allowed under your organization’s rate limit, a 429 Too Many Requests status code will be returned, and the response body will contain the message shown to the right. If you run into this error, you must wait until the UTC epoch time returned in the X-RateLimit-Reset header. If you need a large volume of data, HouseCanary is able to support _significantly_ higher rate limits for enterprise customers. [Contact us](https://support.housecanary.com/) for more details.

We do not charge for requests that result in a response with a 429 status code.
