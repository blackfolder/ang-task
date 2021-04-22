import { User } from '../models/user.model';
import * as fromUsers from './users.reducer';
import { selectUserstate } from './users.selectors';

describe('Users Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserstate({
      [fromUsers.usersFeatureKey]: {}
    });

    expect(result).toEqual(<{ users: { [key: number]: User } }>{});
  });
});
