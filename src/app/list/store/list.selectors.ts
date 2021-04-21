import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { orderBy } from 'lodash';

export const selectListState = createFeatureSelector<fromList.State>(
  fromList.listFeatureKey
);

export const selectUserItems = createSelector(
  selectListState,
  state => Object.values(state.userItems),
);

export const selectSortedUserItems = createSelector(
  selectListState,
  // lodash used for simplicity
  state => orderBy(Object.values(state.userItems), state.sortField, state.sortDirection),
);

export const selectCurrentSort = createSelector(
  selectListState,
  state => ({ columnName: state.sortField, direction: state.sortDirection }),
);
