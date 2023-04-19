import { Level, Endpoint } from '../../types';

export const ltvOrigination: Endpoint = {
  target: 'ltv_origination',
  level: Level.property,
  summary: 'LTV and lien data',
  description:
    'Estimated loan-to-value ratio (LTV) at time of origination for primary loans, as well as the constituent lien (if any) and value (if available) amounts.',
  schema: {
    type: 'object',
    properties: {
      ltv: {
        type: 'number',
        description:
          'Estimated loan-to-value ratio (LTV) at time of origination',
      },
      lien: {
        type: 'integer',
        description: 'Amount in dollars financed',
      },
      value: {
        type: 'integer',
        description:
          'Dollar value of the property. May be null in cases where no liens are present (leading to a 0 LTV) and a value is unavailable.',
      },
      source: {
        type: 'string',
        enum: [
          'deed',
          'mls',
          'avm_block',
          'avm_blockgroup',
          'avm_zip',
          'avm_msa',
          'avm_state',
        ],
        description:
          'Source from which value is derived. One of: deed, mls, avm_block, avm_blockgroup, avm_zip, avm_msa, avm_state',
      },
    },
  },
};
