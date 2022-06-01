import {Directive, forwardRef, InjectionToken, Input} from "@angular/core";
import {ChangeDetectionHandler} from "./change-detection-handler";

export const SECOND_INPUT = new InjectionToken<SecondValueInputDirective>(
  'first value input handler',
  {
    factory: secondValueInputDirective
  }
);


@Directive({
  selector: '[secondValue]',
  providers: [
    {
      provide: SECOND_INPUT,
      useExisting: forwardRef(() => SecondValueInputDirective)
    }
  ]
})
export class SecondValueInputDirective extends ChangeDetectionHandler {
  @Input('secondValue') secondValue = 'default second value';
}

export function secondValueInputDirective(): SecondValueInputDirective {
  return new SecondValueInputDirective();
}
