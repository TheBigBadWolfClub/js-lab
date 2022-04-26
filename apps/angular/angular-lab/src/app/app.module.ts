import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {
  ErrorNotImplementedComponent
} from "@js-lab/ang-lab-common/lib/error-not-implemented/error-not-implemented.component";
import {AngCardDeckModule} from "@js-lab/ang-card-deck-lib";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        //redirectTo: 'home',
        // pathMatch: 'full',
        children: [
          {
            path: 'deck',
            loadChildren: () => import('@js-lab/ang-card-deck-lib/lib/ang-card-deck.module')
              .then(m => m.AngCardDeckModule)
          },
        ]
      },

      {path: 'home', component: ErrorNotImplementedComponent},
    ], {initialNavigation: 'enabledBlocking'}),
    AngCardDeckModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
