import {Component} from '@angular/core';
import {MainRoute} from '../../card-deck-ui.module';

@Component({
  selector: 'angdeck-header-navbar',
  template: `
    <nav class="game-header__nav" mat-align-tabs="center" mat-tab-nav-bar>
      <a mat-tab-link routerLink="game" routerLinkActive="active-link">Game</a>
      <a mat-tab-link routerLink="deal" routerLinkActive="active-link">Deal</a>
      <a mat-tab-link routerLink="async" routerLinkActive="active-link">Async</a>
      <a mat-tab-link routerLink="rxjs-playground" routerLinkActive="active-link">rxjs</a>
    </nav>
  `,
})
export class HeaderNavbarComponent {
  mainRoute = MainRoute
}
