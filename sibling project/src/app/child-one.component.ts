import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-one',
  template: `
    <section>
      <h2>Component One</h2>
      <p>
        <button (click)="onClick($event)">Toggle</button>

      </p>
      <p>{{number1}}</p>
    </section>
  `
})
export class ChildOneComponent {

  number1= 0;
  @Input()
  set event(event1: Event) {
    if (event1) {
      this.toggle();
    }
  }
  toggle() {
   this.number1 = this.number1+1;
  }

  @Output() eventChange = new EventEmitter<Event>();
  onClick(event1: Event) {
    this.eventChange.emit(event1);
  }
}
