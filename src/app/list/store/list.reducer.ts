import { createReducer, on } from '@ngrx/store';
import { ListItem } from '../models/list-item.model';
import * as UsersActions from './list.actions';

export const listFeatureKey = 'list';
export const defaultSortField = 'id';
export const defaultSortDirection = 'asc';

export interface State {
  userItems: ListItem[];
  sortField: string;
  sortDirection: string;
}

export const initialState: State = {
  userItems: [],
  sortField: defaultSortField,
  sortDirection: defaultSortDirection,
};

export const listReducer = createReducer(
  initialState,

  on(UsersActions.loadUserItemsSuccess, (state, { userItems }) => ({
    ...state,
    userItems,
    sortField: defaultSortField,
    sortDirection: defaultSortDirection,
  })),


  on(UsersActions.setUserItemsSort, (state, { sortField, sortDirection }) => ({
    ...state,
    sortField,
    sortDirection,
  })),
);
