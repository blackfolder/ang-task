import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../../models/list-item.model';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() set currentUserId(userId: number) {
    this.listService.loadUserItems(userId);
  };

  userItems$: Observable<ListItem[]> = this.listService.getUserItems();

  constructor(private readonly listService: ListService) { }
}
