import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/models/user.model';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  currentUser$: Observable<User>;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.userService.getCurrentUser();
  }
}
