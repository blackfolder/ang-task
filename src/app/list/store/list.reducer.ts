import { createReducer, on } from '@ngrx/store';
import { ListItem } from '../models/list-item.model';
import * as UsersActions from './list.actions';

export const listFeatureKey = 'list';

export interface State {
  userItems: ListItem[];
}

export const initialState: State = {
  userItems: [],
};

export const listReducer = createReducer(
  initialState,

  on(UsersActions.loadUserItemsSuccess, (state, { userItems }) => ({
    ...state,
    userItems,
  })),
);
