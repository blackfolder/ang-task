import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromList from './list.reducer';

export const selectListState = createFeatureSelector<fromList.State>(
  fromList.listFeatureKey
);

export const selectUserItems = createSelector(
  selectListState,
  state => Object.values(state.userItems),
);
