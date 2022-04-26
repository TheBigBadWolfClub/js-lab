import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {combineLatest, delay, forkJoin, from, interval, map, merge, mergeAll, mergeMap, Subject, take, tap} from "rxjs";
import {AddCardDirective} from "../card/add-card.directive";
import {DeckApiService} from "../../services/deck-api.service";
import {Card, CLUBS, DIAMONDS, HEARTS, SPADES, suitNames} from "../../deck-model";
import {CardComponent} from "../card/card.component";
import {LogInDomService} from "@js-lab/angular-spells-shared/lib/services/log-in-dom.service";



const throttleConfig = {
  leading: false,
  trailing: false
}

@Component({
  selector: 'howls-card-deck-ui-deal',
  templateUrl: './rx-js-play.component.html',
  styleUrls: ['./rx-js-play.component.scss']
})
export class RxJsPlayComponent implements OnInit {

  @ViewChild(AddCardDirective, {static: true}) gameAddCard!: AddCardDirective;

  deck$: Subject<any> = new Subject()

  constructor(private rest: DeckApiService, private logInDom: LogInDomService,
              private componentFactoryResolver: ComponentFactoryResolver) {

    this.deck$.subscribe(x => {
      this.loadComponent(x)
    })
  }

  loadComponent(card: Card) {
    const viewContainerRef = this.gameAddCard.viewContainerRef;
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
    const componentRef = viewContainerRef.createComponent<CardComponent>(dynamicComponentFactory);
    componentRef.instance.card = card;
  }


  ngOnInit(): void {
    this.resetView()
  }

  reduceBySuit = (acc: any, elem: Card) => {
    acc[elem.suit.label] = acc[elem.suit.label] || new Array<Card>()
    acc[elem.suit.label].push(elem)
    return acc;
  }


  mergeMap(): void {
    this.resetView()
    from(suitNames)
      .pipe(
        tap(x => console.log("requesting: " + x)),
        mergeMap((suit) => this.rest.getDeckBySuit(suit, {delay: 1000}))
      ).subscribe(console.log);
  }

  forkJoin(): void {
    forkJoin(
      [
        this.rest.getDeckBySuit(suitNames[SPADES],{delay: 1000}),
        this.rest.getDeckBySuit(suitNames[HEARTS],{delay: 1000}),
      ]
    ).pipe(tap(([spades, hearts]) => {
      spades.flatMap(c => c).forEach(c => this.dealOnTable(c))
      hearts.flatMap(c => c).forEach(c => this.dealOnTable(c))
    }))
      .subscribe(console.log);
  }

  merge(): void {
    const one = this.rest.getCardBySuit(suitNames[CLUBS]).pipe(take(5))
    const two = this.rest.getCardBySuit(suitNames[DIAMONDS]).pipe(take(3))
    merge(
      one, two
    )
      .subscribe(console.log);
  }

  mergeAll(): void {
    const one = this.rest.getCardBySuit(suitNames[CLUBS]).pipe(take(5))
    const two = this.rest.getCardBySuit(suitNames[DIAMONDS]).pipe(take(3))

    const h = interval(1).pipe(
      take(2),
      map(i => [one, two][i])
    );

    h.pipe(mergeAll())
      .subscribe(console.log);
  }

  delayEx(): void {
    this.rest.getSuits({delay: 100})
      .pipe(delay(1))
      .subscribe(console.log);
  }

  combineLatest(): void {
    combineLatest([
        this.rest.getSuits({delay: 0}).pipe(take(1)),
        this.rest.getCards({delay: 1000})
      ]
    ).pipe(
      tap(([suit, card]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const c = {...card, suit: suit, s: suit.symbol} as Card
        this.dealOnTable(c)
      })
    )
      .subscribe(this.log);
  }


  private dealOnTable(c: Card) {
    this.deck$.next(c)
    this.logInDom.log.next(c)
  }

  private log(...data: any[]): void {
    console.log(data)
  }

  private resetView() {
    this.gameAddCard.viewContainerRef.clear();
  }
}
