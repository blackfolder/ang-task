import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormListItem } from '../models/form-list-item.model';
import { addUserItem } from '../store/list.actions';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor(
    private store: Store,
  ) {
  }

  addItem(userId: number, item: FormListItem): void {
    this.store.dispatch(addUserItem({ userId, item }));
  }
}
