import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1 of CEB: Let's have the data to be sent using CEB
  data = 'Arun';

  // Step 2: Let's create custom event
  @Output() profileLoaded = new EventEmitter(); // Step 2.1 @Output() will make the profileLoaded as custom event

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(): void {
    console.log('To send data to parent comp');
    // Step 3: Let's emit / trigger the custom event
    this.profileLoaded.emit(this.data); // Step 4: Send the data when emitting the event
  }
}
