import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a-component',
  templateUrl: './a.component.html'
})
export class AComponent {
  valueFromAComponentFirst = 'from A comp first';
  valueFromAComponentSecond = 'from A comp second';
  valueFromAComponentThird = 'from A comp third';

  changeFirstValue() {
    this.valueFromAComponentFirst = 'updated first';
  }
}
