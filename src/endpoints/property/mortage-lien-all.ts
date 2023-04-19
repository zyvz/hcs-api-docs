import { Endpoint } from '../../types';
import { mortgageLien } from './mortgage-lien';

export const mortgageLienAll: Endpoint = {
  ...mortgageLien,
  target: 'mortgage_lien_all',
  summary: 'All liens identified, even previous',
  description:
    'Identifies all liens / mortgages, including those that existed under previous owners.',
};
