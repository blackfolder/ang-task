import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './store/list.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([ListEffects]),
    FormsModule,
    SharedModule,
  ]
})
export class ListModule { }
