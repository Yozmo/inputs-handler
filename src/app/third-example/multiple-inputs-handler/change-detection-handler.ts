import {Subject} from "rxjs";
import {Directive, OnChanges} from "@angular/core";

/**
 * Base class pe care o folosesti sa faci trigger la change detection `manual`.
 * Ai nevoie de asa ceva pentru ca acuma toate @Input()-urile le vei lua in componenta
 * in care ai nevoie de ele prin DI system, injectand directiva in ramuri diferite in ierarhie.
 * In mod normal, cand un @Input() isi schimba valoarea, Angular iti face automat trigger la change
 * detection pe componenta ta in care ai @Input-ul.
 * Acuma pentru ca tu definesti directiva la un alt nivel in ierarhie, ea nu stie nimic de componenta ta
 * in care vei folosii valorile date.
 *
 * NOTE: asta se datoreaza faptului ca folosim OnPush .. altfel change detection-ul se executa la orice
 * modificare in tot tree-ul (bad for performance)
 */
@Directive()
export abstract class ChangeDetectionHandler implements OnChanges {
  readonly changes$ = new Subject<void>();

  ngOnChanges(): void {
    this.changes$.next();
  }
}
