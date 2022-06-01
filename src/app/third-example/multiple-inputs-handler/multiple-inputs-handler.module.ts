import {NgModule} from "@angular/core";
import {FirstValueInputDirective} from "./first-value-input";
import {SecondValueInputDirective} from "./second-value-input";

@NgModule({
  declarations: [
    FirstValueInputDirective,
    SecondValueInputDirective
  ],
  exports: [
    FirstValueInputDirective,
    SecondValueInputDirective
  ]
})
export class MultipleInputsHandlerModule {}
