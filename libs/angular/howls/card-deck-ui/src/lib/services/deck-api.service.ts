import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {concatMap, delay, mergeMap, Observable, of} from "rxjs";
import {Card, Suit} from "../deck-model";
import {LogInDomService} from "@js-lab/ang-lab-common/lib/services/log-in-dom.service";


export type Options = {
  stream: boolean,
  delay: number,
}
const defaults: Options = {stream: true, delay: 0};


class BaseRequests {
  private readonly baseUrl: string = "/api-deck";

  forUri(uri: string, logInDom: LogInDomService): string {
    const fullUri = `${this.baseUrl}${uri}`;
    logInDom.logHttp.next(fullUri)
    return fullUri;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeckApiService extends BaseRequests {


  constructor(private http: HttpClient, private logInDom: LogInDomService) {
    super();
  }

  getDeck(options: Partial<Options> = {}): Observable<Card[]> {
    const opt = Object.assign(defaults, options);

    const observable = this.http.get<Card[]>(this.forUri(`/deck`, this.logInDom));

    if (opt.stream) {
      return this.streamIt(observable, opt.delay) as Observable<Card[]>
    }
    return observable
      .pipe(
        delay(Math.random() * opt.delay)
      );

  }

  getDeckBySuit(suit: string, options: Partial<Options> = {}): Observable<Card[]> {
    const opt = Object.assign(defaults, options);
    const observable = this.http.get<Card[]>(this.forUri(`/deck/${suit}`, this.logInDom));
    if (opt.stream) {
      return this.streamIt(observable, opt.delay) as Observable<Card[]>
    }
    return observable
      .pipe(
        //tap(result => this.store.update(result))
        delay(Math.random() * opt.delay)
      );
  }

  getCardBySuit(suit: string): Observable<Card> {
    return this.http.get<Card[]>(this.forUri(`/deck/${suit}`, this.logInDom))
      .pipe(
        mergeMap(c => c),
        concatMap(x => of(x)
          .pipe(delay(Math.random() * 1000)))
      );
  }

  getSuits(options: Partial<Options> = {}): Observable<Suit[]> {
    const opt = Object.assign(defaults, options);
    const observable = this.http.get<Suit[]>(this.forUri(`/suits`, this.logInDom))
    if (opt.stream) {
      return this.streamIt(observable, opt.delay) as Observable<Suit[]>

    }
    return observable.pipe(delay(Math.random() * opt.delay));
  }

  getCards(options: Partial<Options> = {}): Observable<Card[]> {
    const opt = Object.assign(defaults, options);
    const observable = this.http.get<Card[]>(this.forUri(`/cards`, this.logInDom));
    if (opt.stream) {
      return this.streamIt(observable, opt.delay) as Observable<Card[]>

    }
    return observable
      .pipe(delay(Math.random() * 1000))
  }

  private streamIt(observable: Observable<unknown[]>, delayTime = 0): Observable<unknown> {
    return observable.pipe(
      mergeMap(c => c),
      concatMap(x => of(x)
        .pipe(delay(Math.random() * delayTime)))
    );
  }
}
