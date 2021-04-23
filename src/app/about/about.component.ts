import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  randomText = 'Tiny utilities to Transform info from one format to another';

  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
