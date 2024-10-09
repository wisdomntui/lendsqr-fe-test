import {useQuery} from '@tanstack/react-query';
import {request} from '..';

// Users Query
export const useUsersQuery = () =>
  useQuery({queryKey: ['users'], queryFn: () => request('/users', 'get', {})});
