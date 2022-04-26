import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {AddCardDirective} from './components/card/add-card.directive';
import {DeckComponent} from './components/deck/deck.component';
import {FlexModule} from "@angular/flex-layout";
import {GameTableComponent} from './components/game-table/game-table.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderNavbarComponent} from './components/header/header-navbar.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {RxJsPlayComponent} from "./components/rx-js-lab/rx-js-play.component";
import {CardDeckUiComponent} from './card-deck-ui.component';
import {HttpClientModule} from "@angular/common/http";
import {
  ErrorNotImplementedComponent
} from "@js-lab/angular-spells-shared/lib/error-not-implemented/error-not-implemented.component";

export const MainRoute = "game"
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'game', component: CardDeckUiComponent},
      {path: 'deal', component: CardDeckUiComponent},
      {path: 'async', component: ErrorNotImplementedComponent},
      {path: 'RxJs', component: ErrorNotImplementedComponent}
    ]),
    FlexModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
  ],
  declarations: [
    CardComponent,
    AddCardDirective,
    DeckComponent,
    GameTableComponent,
    FooterComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    RxJsPlayComponent,
    CardDeckUiComponent
  ]
})
export class CardDeckUiModule {
}
