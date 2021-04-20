import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { IJsonUsersConfig } from '../models/json-users-config.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private readonly userJsonFileUrl = '/assets/user.json';

  constructor(private httpService: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpService.get<IJsonUsersConfig>(this.userJsonFileUrl).pipe(
      map(({ userList }) => userList),
    );
  }
}
