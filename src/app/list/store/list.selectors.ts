import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';
import { orderBy } from 'lodash';

export const selectListState = createFeatureSelector<fromList.State>(
  fromList.listFeatureKey
);

export const selectUserItems = createSelector(
  selectListState,
  state => state.userItems,
);

export const selectSortedUserItems = createSelector(
  selectListState,
  // lodash used for simplicity
  state => orderBy(state.userItems, state.sortField, state.sortDirection),
);