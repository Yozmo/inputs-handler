import {ChangeDetectorRef, InjectionToken, Provider} from "@angular/core";
import {InputsHandlerDirective} from "./inputs-handler.directive";
import {ChangeDetectionHandler} from "./change-detection-handler";
import {Destroy} from "../destroy-handler/destroy";
import {Observable, takeUntil} from "rxjs";
/**
 * Definesti un `token` pentru DI. Pe asta il declari in `providers` array la directiva ta.
 * Ce-i misto la factory-urile astea, e ca daca in DI tree nu exista o instanta pentru ce vrei
 * tu sa injectezi, ea iti creeaza una. Deci nu se va intampla niciodata sa ai valoarea `null` pentru handler-ul asta,
 * oriunde o injectezi in tree.
 */
export const INPUTS_HANDLER = new InjectionToken<InputsHandlerDirective>(
  'Handle inputs throughout multiple layers',
  {
    factory: () => new InputsHandlerDirective()
  }
);

/**
 * Token pe care il injectezi in componenta ta, pentru a-ti lua inputurile.
 * Asta are access la directiva prin DI, cu token-ul INPUTS_HANDLER definit mai sus.
 * Practic e un enchant pentru token-ul de mai sus, care face trigger la change detection, cand o valoare
 * se schimba.
 */
export const CONNECTED_INPUTS_HANDLER = new InjectionToken('A token connected to the change detection');

/**
 * Provider-ul pe care-l pui in providers array in componentele in care ai nevoie de inputuri.
 * Asta puteai sa-l scrii si in array-ul din componenta direct, dar e mai curat asa.
 */
export const INPUTS_HANDLER_PROVIDER: Provider = [
  Destroy,
  {
    provide: CONNECTED_INPUTS_HANDLER,
    // deps-ul e folosit pentru a lua valori din DI tree. Cu ajutorul lui
    // dai parametrii la useFactory-ul de mai jos.
    deps: [INPUTS_HANDLER, ChangeDetectorRef, Destroy],
    useFactory: inputHandlerFactory
  }
];

function inputHandlerFactory(
  changeDetectionHandler: ChangeDetectionHandler,
  cdr: ChangeDetectorRef,
  destroy$: Observable<void>
): ChangeDetectionHandler {
  changeDetectionHandler.changes$
    .pipe(takeUntil(destroy$))
    .subscribe(() => {
      cdr.markForCheck();
    });

  return changeDetectionHandler;
}
