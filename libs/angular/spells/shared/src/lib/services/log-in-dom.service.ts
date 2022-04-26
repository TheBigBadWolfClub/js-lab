import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogInDomService {
  log: Subject<unknown> = new Subject<unknown>()
  logHttp: Subject<unknown> = new Subject<unknown>()
}
