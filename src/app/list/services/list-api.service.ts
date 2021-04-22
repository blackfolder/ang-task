import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../models/list-item.model';
import { JsonListConfig } from '../models/json-list-config.model';
import { map, tap } from 'rxjs/operators';
import { FormListItem } from '../models/form-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  private readonly listJsonFileUrl = '/assets/list.json';

  constructor(private httpService: HttpClient) {
  }

  getUserListItems(userId: number): Observable<ListItem[]> {
    const cachedUserItems = this.getDataFromLocalStorage(userId);
    if (cachedUserItems) {
      return of(cachedUserItems);
    }
    return this.httpService.get<JsonListConfig>(this.listJsonFileUrl).pipe(
      map((items: JsonListConfig) => (items[userId] || [])),
      tap((items: ListItem[]) => this.saveUserListInLocalStorage(userId, items))
    );
  }

  addUserItem(userId: number, item: FormListItem): Observable<ListItem> {
    return this.getUserListItems(userId)
      .pipe(
        map((userItems: ListItem[]) => {
          const newItem = {
            ...item,
            id: this.getNewItemId(userItems),
          };

          userItems.push(newItem);
          this.saveUserListInLocalStorage(userId, userItems);
          return newItem;
        }),
      );
  }

  private saveUserListInLocalStorage(userId: number, items: ListItem[]): void {
    localStorage.setItem(String(userId), JSON.stringify(items));
  }

  private getDataFromLocalStorage(userId: number): ListItem[] | null {
    const cachedUserItems = localStorage.getItem(String(userId));
    let result: ListItem[] = null;
    if (cachedUserItems) {
      try {
        result = JSON.parse(cachedUserItems);
      } catch (error) {
        console.log('Ivalid format of user items data');
      }
    }

    return result;
  }

  private getNewItemId(savedItems: ListItem[]): number {
    const allIds = savedItems.map(item => item.id);
    return Math.max(...allIds) + 1;
  }
}
