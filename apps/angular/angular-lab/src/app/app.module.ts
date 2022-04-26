import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {
  ErrorNotImplementedComponent
} from "@js-lab/angular-spells-shared/lib/error-not-implemented/error-not-implemented.component";
import {CardDeckUiModule} from "@js-lab/angular-howls-card-deck-ui";


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
            loadChildren: () => import('@js-lab/angular-howls-card-deck-ui/lib/card-deck-ui.module')
              .then(m => m.CardDeckUiModule)
          },
        ]
      },

      {path: 'home', component: ErrorNotImplementedComponent},
    ], {initialNavigation: 'enabledBlocking'}),
    CardDeckUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
