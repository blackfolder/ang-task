import { createAction, props } from "@ngrx/store";
import { ListItem } from "../models/list-item.model";

const actionsPrefix = '[List]';
export const loadUserItems = createAction(`${actionsPrefix} Load User Items`, props<{ userId: number }>());
export const loadUserItemsSuccess = createAction(`${actionsPrefix} Load User Items Success`, props<{ userItems: ListItem[] }>());
