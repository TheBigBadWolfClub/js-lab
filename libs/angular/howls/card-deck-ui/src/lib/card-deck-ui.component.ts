import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'angdeck-magic-cards',
  template: `
    <h1>game2</h1>
    <angdeck-header></angdeck-header>
    <router-outlet></router-outlet>
    <angdeck-footer></angdeck-footer>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardDeckUiComponent {

}
