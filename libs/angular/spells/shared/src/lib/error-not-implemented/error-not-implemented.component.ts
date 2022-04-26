import {Component} from '@angular/core';

@Component({
  selector: 'spells-shared-error-not-implemented',
  template: `
    <div class="error-page">
      <h3>not implemented</h3>
    </div>

  `,
  styles: [`
    .error-page {
      font-weight: normal;
      background-color: lightgrey;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class ErrorNotImplementedComponent {

}
