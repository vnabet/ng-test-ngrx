import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { features, metaReducers, rootReducer } from './state/00-reducter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/04-effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [features.ROOT_FEATURE_KEY] : rootReducer
    }, {
      metaReducers,
      runtimeChecks: {
        // S'assure que les action ont des noms différents
        strictActionTypeUniqueness: true,
        // S'assure que sur les reducers, les props ne sont pas modifiées (immutabilité)
        strictActionImmutability: true,
        // S'assure que le state est immutable
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), name: 'NGRX Starter de la mort' }),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
