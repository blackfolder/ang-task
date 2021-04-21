import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './store/list.effects';
import { SharedModule } from '../shared/shared.module';
import { ListItemFormComponent } from './list-item-form/list-item-form.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemFormComponent,
  ],
  exports: [
    ListComponent,
    ListItemFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([ListEffects]),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ListModule { }
