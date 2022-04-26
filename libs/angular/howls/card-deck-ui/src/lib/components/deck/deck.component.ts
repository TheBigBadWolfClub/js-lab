import { Component, OnInit } from '@angular/core';
import {Card} from "../../deck-model";
import {map, mergeMap, Observable, reduce, tap, throttleTime} from "rxjs";
import {DeckApiService} from "../../services/deck-api.service";

@Component({
  selector: 'angdeck-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {


  deck$: Observable<Array<any>>;

  constructor(private deckService: DeckApiService) {
    this.deck$ = this.deckService.getDeck({})
      .pipe(throttleTime(1))
      .pipe(
        //switchMap(data => data as Card[]),
        //map(v => this.sortByRank(v)),
        mergeMap(item => item),
        reduce(this.reduceByCard, {}),
        map(obj => Object.values(obj)),
        tap(x => {
          console.log(x)
        })
      )
  }


  reduceByCard = (acc: any, elem: Card) => {
    acc[elem.symbol] = acc[elem.symbol] || new Array<Card>()
    acc[elem.symbol].push(elem)
    return acc;
  }

  reduceByOne = (acc: any, elem: Card) => {
    acc[1] = acc[1] || new Array<Card>()
    acc[1].push(elem)
    return acc;
  }

  reduceByColor = (acc: any, elem: Card) => {
    acc[elem.suit.color] = acc[elem.suit.color] || new Array<Card>()
    acc[elem.suit.color].push(elem)
    return acc;
  }

  reduceBySuit = (acc: any, elem: Card) => {
    acc[elem.suit.label] = acc[elem.suit.label] || new Array<Card>()
    acc[elem.suit.label].push(elem)
    return acc;
  }



  private sortByRank(v: Card[]) {
    return v.sort((a, b) => a.rank - b.rank);
  }

}
