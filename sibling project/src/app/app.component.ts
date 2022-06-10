import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular sibling components interaction</h1>
    <child-one [event]="event1" (eventChange)="onChange1($event)"></child-one>

    <child-two [event]="event2" (eventChange)="onChange2($event)"></child-two>
  `
})
export class AppComponent {
  event1: Event;
  event2: Event;

  onChange1(event: Event) {
    this.event2 = event;
  }
  onChange2(event: Event) {
    this.event1 = event;
  }
}
