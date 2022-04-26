import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './lifecycle-hooks/child/child.component';
import { ParentComponent } from './lifecycle-hooks/parent/parent.component';
import {AsyncLabComponent} from "./asyn-lab/async-lab.component";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
    FlexModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [
    ChildComponent,
    ParentComponent,
    AsyncLabComponent,
  ],
})
export class PlaygroundModule {}
