import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'howls-card-deck-ui-magic-cards',
  template: `
    <h1>game2</h1>
    <howls-card-deck-ui-header></howls-card-deck-ui-header>
    <router-outlet></router-outlet>
    <howls-card-deck-ui-footer></howls-card-deck-ui-footer>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardDeckUiComponent {

}
