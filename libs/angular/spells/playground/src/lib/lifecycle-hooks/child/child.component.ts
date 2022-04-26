import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ang-spells-playground-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})


/* eslint-disable  @angular-eslint/no-conflicting-lifecycle */
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name = ""


  ngOnInit(): void {
    console.log("ChildComponent ngOnInit  : ")
  }

  ngDoCheck(): void {
    console.log("ChildComponent ngDoCheck  : ")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent ngOnChanges  : " + JSON.stringify(changes))
  }

  ngAfterContentChecked(): void {
    console.log("ChildComponent ngAfterContentChecked  : ")
  }

  ngAfterContentInit(): void {
    console.log("ChildComponent ngAfterContentInit  : ")
  }

  ngAfterViewChecked(): void {
    console.log("ChildComponent ngAfterViewChecked  : ")
  }

  ngAfterViewInit(): void {
    console.log("ChildComponent ngAfterViewInit  : ")
  }


}
