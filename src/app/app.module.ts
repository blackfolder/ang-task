import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserModule } from './user/user.module';
import { EffectsModule } from '@ngrx/effects';
import { usersFeatureKey, usersReducer } from './user/store/users.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListModule } from './list/list.module';
import { listFeatureKey, listReducer } from './list/store/list.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ListModule,
    FormsModule,
    StoreModule.forRoot({ [usersFeatureKey]: usersReducer, [listFeatureKey]: listReducer }, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
