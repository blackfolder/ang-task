import { createAction, props } from "@ngrx/store";
import { ListItem } from "../models/list-item.model";

const actionsPrefix = '[List]';
export const loadUserItems = createAction(`${actionsPrefix} Load User Items`, props<{ userId: number }>());
export const setUserItemsSort = createAction(`${actionsPrefix} Set User Items Sort`, props<{ sortDirection: string, sortField: string }>());
export const loadUserItemsSuccess = createAction(`${actionsPrefix} Load User Items Success`, props<{ userItems: ListItem[] }>());
