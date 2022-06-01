import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondExampleRoutingModule } from './second-example-routing.module';
import { SecondExampleComponent } from './second-example.component';
import { ASecondExampleComponent } from './a-second-example/a-second-example.component';
import { BSecondExampleComponent } from './b-second-example/b-second-example.component';
import { CSecondExampleComponent } from './c-second-example/c-second-example.component';
import {InputsHandlerModule} from "../inputs-handler";
import { DSecondExampleComponent } from './d-second-example/d-second-example.component';


@NgModule({
  declarations: [
    SecondExampleComponent,
    ASecondExampleComponent,
    BSecondExampleComponent,
    CSecondExampleComponent,
    DSecondExampleComponent
  ],
  imports: [
    CommonModule,
    SecondExampleRoutingModule,
    InputsHandlerModule
  ]
})
export class SecondExampleModule { }
