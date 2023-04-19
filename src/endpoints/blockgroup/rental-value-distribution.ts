import { Endpoint } from '../../types';
import { valueDistribution } from './value-distribution';

export const rentalValueDistribution: Endpoint = {
  ...valueDistribution,
  target: 'rental_value_distribution',
  summary: 'Rental property value distribution',
  description:
    'This endpoint provides a distribution summary of rental property dollar values and dollar values per sq ft within the block. It includes maximum, minimum, mean, standard deviation, count, as well as 5-, 25-, 50-, 75-, and 90-percentiles. You can specify a desired property type using the `property_type` request parameter. The default is SFD.',
};
