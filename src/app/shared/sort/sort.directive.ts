import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ColumnSortedData } from './model/column-sorted-data.model';
import { SortService } from './sort.service';

@Directive({
  selector: '[sort]'
})
export class SortDirective implements OnInit, OnDestroy {
  @Input() set sort(sort: ColumnSortedData) {
    if (sort) {
      this.sortService.columnSorted(sort);
    }
  };
  @Output() columnSorted = new EventEmitter();

  private readonly unsubscribe$ = new Subject<boolean>();

  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.sortService.columnSorted$
      .pipe(
        filter((columnSorted: ColumnSortedData) => columnSorted.emitEvent),
        takeUntil(this.unsubscribe$),
      )
      .subscribe((columnSorted: ColumnSortedData) => {
        this.columnSorted.emit(columnSorted);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}