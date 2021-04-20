import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ListApiService } from '../services/list-api.service';
import { loadUserItems, loadUserItemsSuccess } from './list.actions';

@Injectable()
export class ListEffects {

  loadUserListItems$ = createEffect(() => this.actions$.pipe(
    ofType(loadUserItems),
    switchMap(({ userId }) => this.listApiService.getUserListItems(userId)),
    map((userItems) => loadUserItemsSuccess({ userItems })),
  ));

  constructor(
    private actions$: Actions,
    private listApiService: ListApiService,
  ) {
  }

}