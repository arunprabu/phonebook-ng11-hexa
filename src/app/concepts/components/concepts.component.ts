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

  courseName = 'Angular';

  myAge = 100;

  dataReceivedFromChildComp = '';

  isLoggedIn = true;

  skillList: Array<string> = [ 'angular', 'react', 'vuejs', 'nodejs' ];

  constructor() { }

  ngOnInit(): void {
  }

  // ideal place for you to defined methods
  handleClickMe(event: any): void{
    alert('clicked');
    console.log(event);

    // Todo: disable the button
    // Todo: change the button label to 'clicked'
  }

  // Step 6 of CEB: handle the custom event and receive the data in event object
  handleProfileLoaded(event: any): void{
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }



}
