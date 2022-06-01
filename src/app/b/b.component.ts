import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-component',
  templateUrl: './b.component.html'
})
export class BComponent implements OnInit {
  valueFromBComponent = 'from B comp';

  constructor() { }

  ngOnInit(): void {
  }

}
