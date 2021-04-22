import { Component } from '@angular/core';

// Decorator -- ties the html, css, ts
@Component({
  selector: 'app-root', // exposing a selector -- element selector -- mandatory
  templateUrl: './app.component.html', // html -- only one -- mandatory
  styleUrls: ['./app.component.css'] // css -- can be multiple -- styles are optional
})
export class AppComponent {
  // ts

  title = 'phonebook-ng11-hexa';
}
