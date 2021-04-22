import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnSortedData } from '../../../shared/sort/model/column-sorted-data.model';
import { SortService } from '../../../shared/sort/sort.service';
import { ListItem } from '../../models/list-item.model';
import { ListService } from '../../services/list.service';

interface TableHeder {
  name: string;
  sizeInPercent: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [SortService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() set currentUserId(userId: number) {
    this.listService.loadUserItems(userId);
  };

  readonly userItems$: Observable<ListItem[]> = this.listService.getSortedUserItems();
  readonly currentSort$: Observable<ColumnSortedData> = this.listService.getCurrentSort();
  readonly tableHeaders: TableHeder[] = [
    { name: 'id', sizeInPercent: '10%' },
    { name: 'title', sizeInPercent: '45%' },
    { name: 'content', sizeInPercent: '45%' },
  ];

  constructor(private readonly listService: ListService) { }

  onColumnSorted(columnSortedData: ColumnSortedData): void {
    this.listService.setUserItemsSort(columnSortedData.direction, columnSortedData.columnName);
  }
}
