import { createSelector } from 'reselect';

import { RootState } from '.';

type EntityTypes = Pick<RootState, 'user' | 'authApi' | 'usersApi'>;

export default function makeDataSelector<T extends keyof EntityTypes>(entityType: T) {
  return createSelector(
    (state: RootState) => state[entityType],
    (entity) => entity,
  );
}
