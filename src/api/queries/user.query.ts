import {useQuery} from '@tanstack/react-query';
import {request} from '..';

// Users Query
export const useUsersQuery = () =>
  useQuery({queryKey: ['users'], queryFn: () => request('/users', 'get', {})});

// User Query
export const useUserQuery = (id:string|undefined) =>
    useQuery({queryKey: ['user'], queryFn: () => request(`/users/${id}`, 'get', {})});