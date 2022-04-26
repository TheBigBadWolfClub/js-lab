import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[angdeckAddCard]'
})
export class AddCardDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
