import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { ColumnSortedData } from './model/column-sorted-data.model';

@Injectable()
export class SortService {

  private readonly columnSortedSubject = new ReplaySubject<ColumnSortedData>(1);

  columnSorted$ = this.columnSortedSubject.asObservable();

  columnSorted(columnSortedData: ColumnSortedData) {
    this.columnSortedSubject.next(columnSortedData);
  }
}