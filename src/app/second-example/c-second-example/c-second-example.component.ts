import {Component, Inject} from '@angular/core';
import {CONNECTED_INPUTS_HANDLER, INPUTS_HANDLER_PROVIDER, InputsHandlerDirective} from "../../inputs-handler";

@Component({
  selector: 'c-second-example',
  templateUrl: './c-second-example.component.html',
  providers: [INPUTS_HANDLER_PROVIDER]
})
export class CSecondExampleComponent {

  constructor(
    @Inject(CONNECTED_INPUTS_HANDLER) readonly inputsHandler: InputsHandlerDirective
  ) { }

}
