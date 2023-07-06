import createApi from '../../create-api';

import { getBaseQuery } from '../../base-query';

const baseQuery = getBaseQuery('https://ya-praktikum.tech/api/v2/auth');

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['User'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default authApi;
