import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AddCardDirective} from "../card/add-card.directive";
import {Observable, Subject, tap} from "rxjs";
import {DeckApiService} from "../../services/deck-api.service";
import {Card, CLUBS, DIAMONDS, HEARTS, SPADES, suitNames} from "../../deck-model";
import {CardComponent} from "../card/card.component";
import {LogInDomService} from "@js-lab/ang-lab-common/lib/services/log-in-dom.service";


@Component({
  selector: 'angdeck-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  suitNames = suitNames
  HEARTS = HEARTS
  DIAMONDS = DIAMONDS
  SPADES = SPADES
  CLUBS = CLUBS


  @ViewChild(AddCardDirective, {static: true}) angdeckAddCard!: AddCardDirective;

  deck$: Subject<any> = new Subject()

  constructor(private deckService: DeckApiService, private logInDom: LogInDomService,
              private componentFactoryResolver: ComponentFactoryResolver) {

    this.deck$.subscribe(x => {
      this.loadComponent(x)
    })
  }

  loadComponent(card: Card) {
    const viewContainerRef = this.angdeckAddCard.viewContainerRef;
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
    const componentRef = viewContainerRef.createComponent<CardComponent>(dynamicComponentFactory);
    componentRef.instance.card = card;
  }


  ngOnInit(): void {
    this.resetView()
  }


  suitChange(value: string) {
    this.resetView()
    let rest: Observable<unknown>;
    if (suitNames.indexOf(value) < 0) {
      rest = this.deckService.getDeck({delay: 100})
    } else {
      rest = this.deckService.getDeckBySuit(value, {delay: 500})
    }

    rest
      .pipe(
        tap(deck => {
          this.dealOnTable(deck)
        })
      ).subscribe(this.log)

  }

  fullDeck() {
    return []
  }

  private dealOnTable(c: unknown) {
    this.deck$.next(c)
    this.logInDom.log.next(c)
  }

  private log(...data: unknown[]): void {
    console.log(data)
  }

  private resetView() {
    this.angdeckAddCard.viewContainerRef.clear();
  }
}
