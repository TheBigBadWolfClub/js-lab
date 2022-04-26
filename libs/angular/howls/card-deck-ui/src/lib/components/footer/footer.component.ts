import {Component} from '@angular/core';
import {DeckApiService} from "../../services/deck-api.service";
import {LogInDomService} from "@js-lab/angular-spells-shared/lib/services/log-in-dom.service";

@Component({
  selector: 'howls-card-deck-ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public rest: DeckApiService, public logInDom: LogInDomService) {
  }


}
