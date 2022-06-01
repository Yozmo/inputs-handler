import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdExampleRoutingModule } from './third-example-routing.module';
import { ThirdExampleComponent } from './third-example.component';
import {MultipleInputsHandlerModule} from "./multiple-inputs-handler/multiple-inputs-handler.module";
import { AThirdExampleComponent } from './a-third-example/a-third-example.component';
import { BThirdExampleComponent } from './b-third-example/b-third-example.component';
import { CThirdExampleComponent } from './c-third-example/c-third-example.component';
import { DThirdExampleComponent } from './d-third-example/d-third-example.component';
import { AnyComponent } from './any/any.component';


@NgModule({
  declarations: [
    ThirdExampleComponent,
    AThirdExampleComponent,
    BThirdExampleComponent,
    CThirdExampleComponent,
    DThirdExampleComponent,
    AnyComponent
  ],
  imports: [
    CommonModule,
    ThirdExampleRoutingModule,
    MultipleInputsHandlerModule
  ]
})
export class ThirdExampleModule { }
