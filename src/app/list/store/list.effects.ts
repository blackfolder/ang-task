import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ListItem } from '../models/list-item.model';
import { ListApiService } from '../services/list-api.service';
import { addUserItem, loadUserItems, loadUserItemsSuccess } from './list.actions';

@Injectable()
export class ListEffects {

  loadUserListItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserItems),
    switchMap(({ userId }) => this.listApiService.getUserListItems(userId)),
    map((userItems) => loadUserItemsSuccess({ userItems })),
  ));

  addUserItem$ = createEffect(() => this.actions$.pipe(
    ofType(addUserItem),
    switchMap(({ userId, item }) => this.listApiService.addUserItem(userId, item).pipe(
      map((addedItem: ListItem) => ({ userId, addedItem })),
    )),
    map(({ userId, addedItem }) => loadUserItems({ userId })),
  ));

  constructor(
    private actions$: Actions,
    private listApiService: ListApiService,
  ) {
  }

}