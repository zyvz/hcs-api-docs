import { Level, Endpoint } from '../../types';

export const ltvDetails: Endpoint = {
  target: 'ltv_details',
  level: Level.property,
  summary: 'Active lien pay down calculation',
  description:
    'Liens determined to be active have pay down calculated per available lien terms, utilizing information including ARM details and interest-only periods where applicable and available. A sorted list of notice IDs are also included in the response, and their corresponding descriptions are available below. These state any findings during the LTV generation and their typical impact on the calculation - the recipient of this response is free to interpret these notices with higher or lower severity given their own knowledge and context. Missing or malformed public record data requires assumptions to be made.',
  schema: {
    type: 'object',
    properties: {
      as_of_month: {
        type: 'string',
        description:
          'Year and month of the processing date for the loan to value calculation',
      },
      fsd: {
        type: 'number',
        description:
          'Forecast standard deviation for the Housecanary AVM as of the as_of_month',
      },
      in_default: {
        type: 'boolean',
        description: 'Whether the lien is in default',
      },
      last_default_date: {
        type: 'string',
        format: 'date',
        description: 'Date of last default, if one exists',
      },
      ltv_lwr: {
        type: 'number',
        description:
          'Estimated LTV lower bound. Calculated as total_lien / property_value_upr',
      },
      ltv_mean: {
        type: 'number',
        description:
          'Estimated LTV. Calculated as total_lien / property_value_upr',
      },
      ltv_upr: {
        type: 'number',
        description:
          'Estimated LTV upper bound. Calculated as total_lien / property_value_lwr',
      },
      property_value_lwr: {
        type: 'integer',
        description: 'HouseCanary lower bound AVM as of the as_of_month',
      },
      property_value_mean: {
        type: 'integer',
        description:
          'HouseCanary automated monthly value AVM as of the as_of_month. Created using a robust model ensemble methodology.',
      },
      property_value_upr: {
        type: 'integer',
        description: 'HouseCanary upper bound AVM as of the as_of_month',
      },
      total_equity_lwr: {
        type: 'integer',
        description:
          'Lower bound estimated equity as of the as_of_month. Calculated as property_value_lwr - total_lien.',
      },
      total_equity_mean: {
        type: 'integer',
        description:
          'Mean estimated equity as of the as_of_month. Calculated as property_value_mean - total_lien.',
      },
      total_equity_upr: {
        type: 'integer',
        description:
          'Upper bound estimated equity as of the as_of_month. Calculated as property_value_upr - total_lien.',
        example: '2022-04-15',
      },
      total_lien: {
        type: 'integer',
        description: 'Estimated total lien amount currently on the property',
      },
      total_monthly_payments: {
        type: 'integer',
        description:
          'Estimated total monthly payments. Sum of all monthly_payment values of current_liens.',
      },
      total_notice_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Complete list of all notice_ids on all liens',
      },
      current_liens: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            arm_change_date: {
              type: 'string',
              format: 'date-time',
              description:
                'Date that the ARM will change from fixed rate to adjustable (if applicable)',
            },
            arm_index: {
              type: 'string',
              enum: [
                'cd_6m',
                'cofi',
                'libor_1m',
                'libor_1y',
                'libor_2m',
                'libor_3m',
                'libor_6m',
                'mta_12m',
                'prime',
                'tbill_10y',
                'tbill_1y',
                'tbill_3y',
                'tbill_5y',
                'tbill_6m',
              ],
              description: 'ARM index followed by the lien',
            },
            due_date: {
              type: 'string',
              format: 'date',
              description: 'The date the lien is scheduled to be paid-in-full',
            },
            grantee_1: {
              type: 'string',
              description: 'Last name of first person listed on lien',
            },
            grantee_1_forenames: {
              type: 'string',
              description: 'First name of first person listed on lien',
            },
            grantee_2: {
              type: 'string',
              description: 'Last name of second person listed on lien',
            },
            grantee_2_forenames: {
              type: 'string',
              description: 'First name of second person listed on lien',
            },
            grantor_1: {
              type: 'string',
              description: 'Name of the primary financier of the lien',
            },
            grantor_2: {
              type: 'string',
              description: 'Name of the secondary financier of the lien',
            },
            heloc: {
              type: 'boolean',
              description: 'Whether the loan is a home equity line of credit',
            },
            interest_rate: {
              type: 'number',
              description:
                'The estimated interest rate, based on mortgage_years and FRED rates',
            },
            is_arm: {
              type: 'boolean',
              description: 'Whether the lien is an adjustable rate mortgage',
            },
            lender_type: {
              type: 'string',
              description:
                'Entity making the loan. One of [bank, credit_union, finance_company, government, individual_private_party, insurance, internet, lending_institution, mortgage_company, other_company, reo_foreclosure_company, seller, subprime_lender]',
            },
            lien_amount: {
              type: 'integer',
              description: 'Amount in dollars financed',
            },
            lien_length_months: {
              type: 'integer',
              description: 'Duration of the lien in months',
            },
            lien_months_completed_as_of_date: {
              type: 'integer',
              description: 'Number of months matured by the lien',
            },
            lien_type: {
              type: 'string',
              description:
                "The type of lien acquired. One of [arm, commercial, construction, conventional, fannie_mae_freddie_mac (These entities don't originate anymore; most conventional meet criteria), farmers_home_administration, fha, land_contract, open_end, revolving_credit_line, second_to_cover_down_payment, seller_take_back, stand_alone_first, stand_alone_refi, stand_alone_second, state_veterans, usda, va]",
            },
            monthly_payment: {
              type: 'integer',
              description: 'Monthly lien payment (not including escrow)',
            },
            notice_ids: {
              type: 'array',
              items: {
                type: 'string',
              },
              description:
                'Any notices of default on the lien (if they exist). See table below for what each code means.',
            },
            outstanding_principal: {
              type: 'integer',
              description: 'Estimated outstanding principal owed on the lien.',
            },
            principal_paid_as_of_date: {
              type: 'integer',
              description:
                'Estimated paid principal. lien_amount - outstanding_principal',
            },
            record_date: {
              type: 'string',
              format: 'date',
              description: 'Date the lien originated',
            },
            stand_alone_refi: {
              type: 'boolean',
              description:
                'Whether the refinance occurred with no concurrent loans',
            },
          },
        },
      },
    },
  },
};
