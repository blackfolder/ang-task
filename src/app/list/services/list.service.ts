import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUserItems } from '../store/list.actions';
import { ListItem } from '../models/list-item.model';
import { selectUserItems } from '../store/list.selectors';

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

  getUserItems(): Observable<ListItem[]> {
    return this.store.select(selectUserItems);
  }
}
