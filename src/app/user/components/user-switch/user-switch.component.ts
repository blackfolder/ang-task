import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSwitchComponent implements OnInit {
  users$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loadUsers();
  }

  selectUser(id: number): void {
    this.userService.switchUser(id);
  }
}
