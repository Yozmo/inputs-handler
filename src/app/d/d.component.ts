import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CONNECTED_INPUTS_HANDLER, INPUTS_HANDLER_PROVIDER, InputsHandlerDirective} from "../inputs-handler";

@Component({
  selector: 'd-component',
  templateUrl: './d.component.html',
  providers: [
    INPUTS_HANDLER_PROVIDER
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DComponent implements OnInit, OnDestroy {

  constructor(
    @Inject(CONNECTED_INPUTS_HANDLER) readonly inputsHandler: InputsHandlerDirective,
  ) { }

  ngOnInit(): void {
    // ai access la valori in ts.
    console.log(this.inputsHandler.firstInput);
    console.log(this.inputsHandler.secondInput);
    console.log(this.inputsHandler.thirdInput);
  }

  ngOnDestroy(): void {
  }

}
