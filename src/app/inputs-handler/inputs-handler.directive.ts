import {ChangeDetectionHandler} from "./change-detection-handler";
import {Directive, forwardRef, Input} from "@angular/core";
import {INPUTS_HANDLER} from "./inputs-handler.provider";

@Directive({
  selector: '[firstInput]',
  providers: [
    {
      provide: INPUTS_HANDLER,
      useExisting: forwardRef(() => InputsHandlerDirective),
    },
  ],
})
export class InputsHandlerDirective extends ChangeDetectionHandler {

  @Input('firstInput')
  firstInput: string | undefined;

  @Input('secondInput')
  secondInput: string | undefined;

  @Input('thirdInput')
  thirdInput: string | undefined;
}
