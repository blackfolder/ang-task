import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortHeaderComponent } from './sort/sort-header/sort-header.component';
import { SortDirective } from './sort/sort.directive';

@NgModule({
  declarations: [
    SortHeaderComponent,
    SortDirective,
  ],
  exports: [
    SortHeaderComponent,
    SortDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
