import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUserItems, setUserItemsSort } from '../store/list.actions';
import { ListItem } from '../models/list-item.model';
import { selectCurrentSort, selectSortedUserItems, selectUserItems } from '../store/list.selectors';
import { ColumnSortedData } from '../../shared/sort/model/column-sorted-data.model';

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

  setUserItemsSort(sortDirection: string = 'asc', sortField: string = 'id'): void {
    this.store.dispatch(setUserItemsSort({ sortDirection, sortField }));
  }

  getUserItems(): Observable<ListItem[]> {
    return this.store.select(selectUserItems);
  }

  getSortedUserItems(): Observable<ListItem[]> {
    return this.store.select(selectSortedUserItems);
  }

  getCurrentSort(): Observable<ColumnSortedData> {
    return this.store.select(selectCurrentSort);
  }
}
