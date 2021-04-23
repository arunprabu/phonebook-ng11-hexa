import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 of CPB:
  @Input() age = 20; // Step 2 of CPB: Making age as custom property by using @Input()
  // Refer concepts.comp.html for Step 3 of CPB

  constructor() { }

  ngOnInit(): void {
  }

}
