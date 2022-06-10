import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-two',
  template: `
    <section>
      <h2>Component Two</h2>
      <button (click)="onClick($event)">Toggle</button>
      <p>{{number2}}</p>
    </section>
  `
})
export class ChildTwoComponent {
 number2= 0;
  @Input()
  set event(event2: Event) {
    if (event2) {
      this.toggle();
    }
  }
  toggle() {
   this.number2 = this.number2+1;
  }

  @Output() eventChange = new EventEmitter<Event>();
  onClick(event2: Event) {
    this.eventChange.emit(event2);
  }

}

