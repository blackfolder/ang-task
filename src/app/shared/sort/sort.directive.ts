import { Directive, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnSortedData } from './model/column-sorted-data.model';
import { SortService } from './sort.service';

@Directive({
  selector: '[sort]'
})
export class SortDirective implements OnInit, OnDestroy {
  @Output() columnSorted = new EventEmitter();

  private readonly unsubscribe$ = new Subject<boolean>();

  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.sortService.columnSorted$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((columnSorted: ColumnSortedData) => {
        this.columnSorted.emit(columnSorted);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}