import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { features, metaReducers, rootReducer } from './state/00-reducter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [features.ROOT_FEATURE_KEY] : rootReducer
    }, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), name: 'NGRX Starter de la mort' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
