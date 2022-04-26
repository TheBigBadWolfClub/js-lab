import {Component, Input} from '@angular/core';
import {Card} from "../../deck-model";

@Component({
  selector: 'angdeck-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() card: Card = {
    label: "", rank: 0, symbol: "", value: 0,
    suit: {color: "", label: "", symbol: ""}
  }

}
