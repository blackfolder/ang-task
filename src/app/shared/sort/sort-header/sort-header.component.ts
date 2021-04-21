import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SortService } from '../sort.service';

@Component({
  selector: '[sort-header]',
  templateUrl: './sort-header.component.html'
})
export class SortHeaderComponent implements OnInit, OnDestroy {
  @Input('sort-header') columnName: string;
  @Input('sort-direction') sortDirection: string;

  @HostListener('click') sort(): void {
    // TODO: Use enum instead of 'magic' strings
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.sortService.columnSorted({
      columnName: this.columnName,
      direction: this.sortDirection,
      emitEvent: true,
    });
  }

  private readonly unsubscribe$ = new Subject<boolean>();

  constructor(private sortService: SortService) { }

  ngOnInit(): void {
    this.sortService.columnSorted$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(columnSorted => {
        this.sortDirection = this.columnName === columnSorted.columnName
          ? columnSorted.direction
          : null;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}