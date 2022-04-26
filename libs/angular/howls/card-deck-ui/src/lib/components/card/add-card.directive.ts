import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[howlsCardDeckUIAddCard]'
})
export class AddCardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
