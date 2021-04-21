import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnSortedData } from './model/column-sorted-data.model';

@Injectable()
export class SortService {

  private readonly columnSortedSubject = new Subject<ColumnSortedData>();

  columnSorted$ = this.columnSortedSubject.asObservable();

  columnSorted(columnSortedData: ColumnSortedData) {
    this.columnSortedSubject.next(columnSortedData);
  }
}