import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { UserApiService } from '../services/user-api.service';

import { UsersEffects } from './users.effects';

describe('UsersEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        {
          provide: UserApiService,
          useValue: jasmine.createSpyObj<UserApiService>('UserApiService', ['getUsers']),
        },
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.inject(UsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
