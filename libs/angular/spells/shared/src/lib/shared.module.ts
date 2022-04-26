import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotImplementedComponent } from './error-not-implemented/error-not-implemented.component';
import {LogInDomService} from "./services/log-in-dom.service";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ErrorNotImplementedComponent
  ],
  exports: [
    ErrorNotImplementedComponent
  ], providers: [
    LogInDomService
  ]
})
export class SharedModule {}
