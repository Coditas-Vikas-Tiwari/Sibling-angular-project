import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one.component';
import { ChildTwoComponent } from './child-two.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildOneComponent, ChildTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
