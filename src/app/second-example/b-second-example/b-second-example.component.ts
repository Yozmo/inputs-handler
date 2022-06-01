import { Component } from '@angular/core';

@Component({
  selector: 'b-second-example',
  templateUrl: './b-second-example.component.html'
})
export class BSecondExampleComponent  {
  firstValue = 'first from B-Second';
  secondValue = 'second from B-Second comp';
  thirdValue = 'third from B-Second comp';
}
