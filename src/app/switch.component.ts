import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  template: `
    <div class="toggle">
      <input class="toggle-input" type="checkbox" />
      <button
        (click)="toggle()"
        class="toggle-btn"
        [class.toggle-btn-on]="on"
        [class.toggle-btn-off]="!on"
        [attr.aria-expanded]="on"
      ></button>
    </div>
  `
})
export class SwitchComponent {
  on: boolean;
  toggle() {
    this.on = !this.on;
  }
}
