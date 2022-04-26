import {Component, Input} from '@angular/core';
import {Card} from "../../deck-model";

@Component({
  selector: 'howls-card-deck-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() card: Card = {
    label: "", rank: 0, symbol: "", value: 0,
    suit: {color: "", label: "", symbol: ""}
  }

}
