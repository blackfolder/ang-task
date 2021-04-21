import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../models/list-item.model';
import { JsonListConfig } from '../models/json-list-config.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  private readonly listJsonFileUrl = '/assets/list.json';

  constructor(private httpService: HttpClient) {
  }

  getUserListItems(userId: number): Observable<ListItem[]> {
    return this.httpService.get<JsonListConfig>(this.listJsonFileUrl).pipe(
      map((items: JsonListConfig) => (items[userId] || [])),
    );
  }
}
