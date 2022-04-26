import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ang-spells-playground-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

/* eslint-disable  @angular-eslint/no-conflicting-lifecycle */
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  name = "=> ";


  ngOnInit(): void {
    console.log("ParentComponent ngOnInit  : ")
  }

  ngDoCheck(): void {
    console.log("ParentComponent ngDoCheck  : ")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ParentComponent ngOnChanges  : " + JSON.stringify(changes))
  }

  ngAfterContentChecked(): void {
    console.log("ParentComponent ngAfterContentChecked  : ")
  }

  ngAfterContentInit(): void {
    console.log("ParentComponent ngAfterContentInit  : ")
  }

  ngAfterViewChecked(): void {
    console.log("ParentComponent ngAfterViewChecked  : ")
  }

  ngAfterViewInit(): void {
    console.log("ParentComponent ngAfterViewInit  : ")
  }



  changeChild() {
    this.name = this.name + "a"
  }

}
