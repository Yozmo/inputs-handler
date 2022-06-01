import {Component, Inject} from '@angular/core';
import {
  CONNECTED_MULTIPLE_INPUTS_HANDLER,
  MULTIPLE_INPUTS_PROVIDER
} from "../multiple-inputs-handler/multiple-inputs.provider";
import {MultipleInputsHandler} from "../multiple-inputs-handler/multiple-inputs-handler";

@Component({
  selector: 'd-third-example',
  templateUrl: './d-third-example.component.html',
  providers: [MULTIPLE_INPUTS_PROVIDER]
})
export class DThirdExampleComponent {

  constructor(
    @Inject(CONNECTED_MULTIPLE_INPUTS_HANDLER) readonly inputsHandler: MultipleInputsHandler
  ) { }

}
