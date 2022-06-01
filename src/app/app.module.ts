import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import {InputsHandlerModule} from "./inputs-handler";

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsHandlerModule
  ],
  providers: [],
  exports: [
    CComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
