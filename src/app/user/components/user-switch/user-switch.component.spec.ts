import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user.service';

import { UserSwitchComponent } from './user-switch.component';

describe('UserSwitchComponent', () => {
  let component: UserSwitchComponent;
  let fixture: ComponentFixture<UserSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: jasmine.createSpyObj<UserService>('UserService', ['loadUsers', 'getUsers', 'getCurrentUser']),
        },
      ],
      declarations: [UserSwitchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
