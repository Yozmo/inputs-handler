import {Directive, forwardRef, InjectionToken, Input} from "@angular/core";
import {ChangeDetectionHandler} from "./change-detection-handler";

export const FIRST_INPUT = new InjectionToken<FirstValueInputDirective>(
  'first value input handler',
  {
    factory: firstValueInputDirective
  }
);


@Directive({
  selector: '[firstValue]',
  providers: [
    {
      provide: FIRST_INPUT,
      useExisting: forwardRef(() => FirstValueInputDirective)
    }
  ]
})
export class FirstValueInputDirective extends ChangeDetectionHandler {
  @Input('firstValue') firstValue = 'default first value';
}

export function firstValueInputDirective(): FirstValueInputDirective {
  return new FirstValueInputDirective();
}
