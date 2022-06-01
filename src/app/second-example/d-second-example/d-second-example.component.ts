import {Component, Inject, OnInit} from '@angular/core';
import {CONNECTED_INPUTS_HANDLER, INPUTS_HANDLER_PROVIDER, InputsHandlerDirective} from "../../inputs-handler";

@Component({
  selector: 'd-second-example',
  templateUrl: './d-second-example.component.html',
  providers: [INPUTS_HANDLER_PROVIDER]
})
export class DSecondExampleComponent implements OnInit {

  constructor(
    @Inject(CONNECTED_INPUTS_HANDLER) readonly inputsHandler: InputsHandlerDirective
  ) { }

  ngOnInit(): void {
  }

}
