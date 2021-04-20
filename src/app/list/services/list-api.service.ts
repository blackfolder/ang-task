import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  private readonly listJsonFileUrl = '/assets/list.json';

  constructor(private httpService: HttpClient) {
  }

  getUserListItems(userId: number): Observable<ListItem[]> {
    // TODO: Get data from JSON file
    return of([]);
  }
}
