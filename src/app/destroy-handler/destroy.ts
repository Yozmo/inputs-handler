import {Subject} from "rxjs";
import {Injectable, OnDestroy} from "@angular/core";

@Injectable()
export class Destroy extends Subject<void> implements OnDestroy {
  constructor() {
    super();
  }

  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
