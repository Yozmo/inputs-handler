import {Observable} from "rxjs";
import {FirstValueInputDirective} from "./first-value-input";
import {SecondValueInputDirective} from "./second-value-input";

export class MultipleInputsHandler {
  constructor(
    readonly change$: Observable<void>,
    private readonly firstValueHandler: FirstValueInputDirective,
    private readonly secondValueHandler: SecondValueInputDirective,
  ) {
  }

  get firstValue(): string {
    return this.firstValueHandler.firstValue;
  }

  get secondValue(): string {
    return this.secondValueHandler.secondValue;
  }
}
