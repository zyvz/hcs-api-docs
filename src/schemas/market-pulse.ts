import { OpenAPIV3 } from 'openapi-types';

export const marketPulseSchema: OpenAPIV3.SchemaObject = {
  type: 'object',
  properties: {
    daysOnMarketMedian: {
      type: 'integer',
      description:
        'Median days on market for all single family detached properties actively listed for sale or in contract as of the date specified.',
      example: 50,
      nullable: true,
    },
    daysOnMarketMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median days on market for all single family detached properties actively listed for sale or in contract as of the date specified.',
      example: 54,
      nullable: true,
    },
    daysOnMarketNotContractMedian: {
      type: 'integer',
      description:
        'Median days on market for all single family detached properties actively listed for sale as of the date specified.',
      example: 45,
      nullable: true,
    },
    daysOnMarketNotContractMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median days on market for all single family detached properties actively listed for sale as of the date specified.',
      example: 48,
      nullable: true,
    },
    daysToCloseMedian: {
      type: 'integer',
      description:
        'Median days on market from original list date to close date, for single family detached properties going into closed sale.',
      example: 66,
      nullable: true,
    },
    daysToCloseMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median days on market from original list date to close date, for single family detached properties going into closed sale.',
      example: 63,
      nullable: true,
    },
    daysToContractMedian: {
      type: 'integer',
      description:
        'Median days on market from original list date to contract date, for single family detached properties going into contract.',
      example: 36,
      nullable: true,
    },
    daysToContractMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median days on market from original list date to contract date, for single family detached properties going into contract.',
      example: 42,
      nullable: true,
    },
    daysToFirstPriceDropMedian: {
      type: 'integer',
      description:
        'Median days on market from original list date to the first price reduction, for listed single family detached properties which experienced a price reduction.',
      example: 42,
      nullable: true,
    },
    daysToFirstPriceDropMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median days on market from original list date to the first price reduction, for listed single family detached properties which experienced a price reduction.',
      example: 43,
      nullable: true,
    },
    eventdate: {
      type: 'string',
      format: 'date',
      description: 'Date of time series',
      example: '2021-01-01',
    },
    listingsClosedCount: {
      type: 'integer',
      description:
        'Total number of listed single family detached properties which went into closed sale status during the week ending on the date specified.',
      example: 112,
      nullable: true,
    },
    listingsClosedCountMovingAvg: {
      type: 'integer',
      description:
        'Moving average of total number of listed single family detached properties which went into closed sale status during the week ending on the date specified.',
      example: 165,
      nullable: true,
    },
    listingsNewCount: {
      type: 'integer',
      description:
        'Number of single family detached properties newly listed for sale during the week ending on the date specified.',
      example: 339,
      nullable: true,
    },
    listingsNewCountMovingAvg: {
      type: 'integer',
      description:
        'Moving average of number of single family detached properties newly listed for sale during the week ending on the date specified.',
      example: 296,
      nullable: true,
    },
    listingsOnMarketCount: {
      type: 'integer',
      description:
        'Total number of single family detached properties actively listed for sale, or in contract, as of the date specified.',
      example: 2636,
      nullable: true,
    },
    listingsOnMarketCountMovingAvg: {
      type: 'integer',
      description:
        'Moving average of total number of single family detached properties actively listed for sale, or in contract, as of the date specified.',
      example: 2516,
      nullable: true,
    },
    listingsPriceChangeCount: {
      type: 'integer',
      description:
        'Total number of listed single family detached properties which experienced any price change during the week ending on the date specified.',
      example: 112,
      nullable: true,
    },
    listingsPriceChangeCountMovingAvg: {
      type: 'integer',
      description:
        'Moving average of total number of listed single family detached properties which experienced any price change during the week ending on the date specified.',
      example: 165,
      nullable: true,
    },
    listingsPriceDropCount: {
      type: 'integer',
      description:
        'Total number of listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      example: 95,
      nullable: true,
    },
    listingsPriceDropCountMovingAvg: {
      type: 'integer',
      description:
        'Moving average of total number of listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      example: 86,
      nullable: true,
    },
    listingsPriceDropPercent: {
      type: 'number',
      format: 'float',
      description:
        'Percent of all actively listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      example: 3.6,
      nullable: true,
    },
    listingsPriceDropPercentMovingAvg: {
      type: 'number',
      format: 'float',
      description:
        'Moving average of percent of all actively listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      example: 3.43,
      nullable: true,
    },
    listingsRemovedCount: {
      description:
        'Total number of listed single family detached properties removed from market during the week ending on the date specified (not due to going into contract or close).',
      type: 'integer',
      nullable: true,
      example: null,
    },
    listingsRemovedCountMovingAvg: {
      description:
        'Moving average of total number of listed single family detached properties removed from market during the week ending on the date specified (not due to going into contract or close).',
      type: 'integer',
      nullable: true,
      example: null,
    },
    listingsRemovedPercent: {
      description:
        'Percent of all actively listed single family detached properties removed from market during the week ending on the date specified (not due to going into contract or close).',
      type: 'integer',
      nullable: true,
      example: null,
    },
    listingsRemovedPercentMovingAvg: {
      description:
        'Moving average of percent of all actively listed single family detached properties removed from market during the week ending on the date specified (not due to going into contract or close).',
      type: 'integer',
      nullable: true,
      example: null,
    },
    listingsUnderContractCount: {
      description:
        'Total number of listed single family detached properties going into contract during the week ending on the date specified.',
      type: 'integer',
      nullable: true,
      example: 278,
    },
    listingsUnderContractCountMovingAvg: {
      description:
        'Moving average of total number of listed single family detached properties going into contract during the week ending on the date specified.',
      type: 'integer',
      nullable: true,
      example: 230,
    },
    listingsUnderContractPercent: {
      description:
        'Percent of all actively listed single family detached properties in contract status as of the date specified.',
      type: 'number',
      nullable: true,
      example: 34.79,
    },
    listingsUnderContractPercentMovingAvg: {
      description:
        'Moving average of percent of all actively listed single family detached properties in contract status as of the date specified.',
      type: 'number',
      nullable: true,
      example: 32.43,
    },
    monthsOfSupplyMedian: {
      description:
        'Median months of supply for all single family detached properties as of the date specified.',
      type: 'number',
      nullable: true,
      example: 2.59,
    },
    monthsOfSupplyMedianMovingAvg: {
      description:
        'Moving average of median months of supply for all single family detached properties as of the date specified.',
      type: 'number',
      nullable: true,
      example: 2.47,
    },
    priceChangePercentMedian: {
      description:
        'The median percent change in price, for actively listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      type: 'number',
      nullable: true,
      example: -2.86,
    },
    priceChangePercentMedianMovingAvg: {
      description:
        'Moving average of the median percent change in price, for actively listed single family detached properties which experienced a price reduction during the week ending on the date specified.',
      type: 'number',
      nullable: true,
      example: -3.7,
    },
    priceClosedMedian: {
      type: 'integer',
      description:
        'Median sold price of single family detached properties going into closed sale status during the week ending on the date specified.',
      nullable: true,
      example: 1005000,
    },
    priceClosedMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median sold price of single family detached properties going into closed sale status during the week ending on the date specified.',
      nullable: true,
      example: 1051060,
    },
    priceNewListMedian: {
      type: 'integer',
      description:
        'Median list price of single family detached properties newly listed for sale during the week ending on the date specified.',
      nullable: true,
      example: 1200000,
    },
    priceNewListMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median list price of single family detached properties newly listed for sale during the week ending on the date specified.',
      nullable: true,
      example: 1173833,
    },
    priceOnMarketMedian: {
      type: 'integer',
      description:
        'Median list price of all actively listed properties as of the date specified.',
      nullable: true,
      example: 1099844,
    },
    priceOnMarketMedianMovingAvg: {
      type: 'integer',
      description:
        'Moving average of median list price of all actively listed properties as of the date specified.',
      nullable: true,
      example: 1096425,
    },
    pricePerSqftClosedMedian: {
      type: 'number',
      description:
        'Median sold price-per-square-foot of single family detached properties going into closed sale status during the week ending on the date specified.',
      nullable: true,
      example: 608.46,
    },
    pricePerSqftClosedMedianMovingAvg: {
      type: 'number',
      description:
        'Moving average of median sold price-per-square-foot of single family detached properties going into closed sale status during the week ending on the date specified.',
      nullable: true,
      example: 651.62,
    },
    pricePerSqftNewListMedian: {
      type: 'number',
      description:
        'Median list price-per-square-foot of single family detached properties newly listed for sale during the week ending on the date specified.',
      nullable: true,
      example: 694.61,
    },
    pricePerSqftNewListMedianMovingAvg: {
      type: 'number',
      description:
        'Moving average of median list price-per-square-foot of single family detached properties newly listed for sale during the week ending on the date specified.',
      nullable: true,
      example: 699.52,
    },
    pricePerSqftOnMarketMedian: {
      type: 'number',
      description:
        'Median list price-per-square-foot of all actively listed single family detached properties as of the date specified.',
      nullable: true,
      example: 664.72,
    },
    pricePerSqftOnMarketMedianMovingAvg: {
      type: 'number',
      description:
        'Moving average of median list price-per-square-foot of all actively listed single family detached properties as of the date specified.',
      nullable: true,
      example: 659.75,
    },
    saleToListPriceMedian: {
      type: 'number',
      description:
        'Median sale-to-list price ratio computed as the closed sale price over the most recently listed price prior to the property going into contract. Result is expressed as a percentage.',
      nullable: true,
      example: 98.27,
    },
    saleToListPriceMedianMovingAvg: {
      type: 'number',
      description:
        'Moving average of median sale-to-list price ratio computed as the closed sale price over the most recently listed price prior to the property going into contract. Result is expressed as a percentage.',
      nullable: true,
      example: 98.8,
    },
    saleToListPriceOriginalMedian: {
      type: 'number',
      description:
        'Median sale-to-list price ratio computed as the closed sale price over the original listed price. Result is expressed as a percentage.',
      nullable: true,
      example: 96.1,
    },
    saleToListPriceOriginalMedianMovingAvg: {
      type: 'number',
      description:
        'Moving average of median sale-to-list price ratio computed as the closed sale price over the original listed price. Result is expressed as a percentage.',
      nullable: true,
      example: 97.08,
    },
  },
};
