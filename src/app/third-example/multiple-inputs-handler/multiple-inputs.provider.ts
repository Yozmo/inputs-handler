import {ChangeDetectorRef, InjectionToken, Provider} from "@angular/core";
import {MultipleInputsHandler} from "./multiple-inputs-handler";
import {Destroy} from "../../destroy-handler/destroy";
import {FIRST_INPUT, FirstValueInputDirective} from "./first-value-input";
import {SECOND_INPUT, SecondValueInputDirective} from "./second-value-input";
import {merge, NEVER, Observable, takeUntil} from "rxjs";

export const CONNECTED_MULTIPLE_INPUTS_HANDLER =
  new InjectionToken<MultipleInputsHandler>('connected multiple inputs handler');

export const MULTIPLE_INPUTS_PROVIDER: Provider = [
  Destroy,
  {
    provide: CONNECTED_MULTIPLE_INPUTS_HANDLER,
    deps: [
      ChangeDetectorRef,
      Destroy,
      FIRST_INPUT,
      SECOND_INPUT,
    ],
    useFactory: multipleInputsFactory
  }
];

function multipleInputsFactory(
  cdr: ChangeDetectorRef,
  destroy$: Observable<void>,
  ...handlers: [
    firstInputHandler: FirstValueInputDirective,
    secondInputHandler: SecondValueInputDirective,
  ]
): MultipleInputsHandler {
  const changes$  = merge(...handlers.map(({changes$}) => changes$ || NEVER)).pipe(takeUntil(destroy$));

  changes$.subscribe(() => {
      cdr.markForCheck();
  });

  return new MultipleInputsHandler(changes$, ...handlers);
}
