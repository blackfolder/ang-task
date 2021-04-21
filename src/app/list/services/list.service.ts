import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUserItems, setUserItemsSort } from '../store/list.actions';
import { ListItem } from '../models/list-item.model';
import { selectSortedUserItems, selectUserItems } from '../store/list.selectors';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private store: Store,
  ) {
  }

  loadUserItems(userId: number): void {
    this.store.dispatch(loadUserItems({ userId }));
  }

  sortUserItems(sortDirection: string = 'asc', sortField: string = 'id'): void {
    this.store.dispatch(setUserItemsSort({ sortDirection, sortField }));
  }

  getUserItems(): Observable<ListItem[]> {
    return this.store.select(selectUserItems);
  }

  getSortedUserItems(): Observable<ListItem[]> {
    return this.store.select(selectSortedUserItems);
  }
}
