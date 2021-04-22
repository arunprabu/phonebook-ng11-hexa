import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public or private variables can go here
  appName = 'Phone Book App';

  companyName = 'Hexaware';

  constructor() { }

  ngOnInit(): void {
  }

}
