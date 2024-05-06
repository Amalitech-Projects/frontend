import { Component, HostListener } from '@angular/core';
import { SearchToFromComponent } from '../intake-components/search-to-from/search-to-from.component';
import { NgClass } from '@angular/common';
import { DatePickerComponent } from '../intake-components/date-picker/date-picker.component';
import { PassengersComponent } from '../intake-components/passengers/passengers.component';

@Component({
  selector: 'app-round-trip',
  standalone: true,
  imports: [SearchToFromComponent, DatePickerComponent, PassengersComponent, NgClass],
  templateUrl: './round-trip.component.html',
  styleUrl: './round-trip.component.css'
})
export class RoundTripComponent {

  status: string = "Leaving from";

  toggleOne: boolean = false;
  toggleTwo: boolean = false;
  toggleThree: boolean = false;

  animateInterchange : boolean = false;

  toggleLeaveFrom(){
    this.toggleOne = true;
    this.toggleTwo = false;
    this.toggleThree = false;
  }
  
  toggleGoingTo(){
    this.toggleTwo = true;
    this.toggleOne = false;
    this.toggleThree = false;
  }
  
  togglePassengers(){
    this.toggleThree = true;
    this.toggleTwo = false;
    this.toggleOne = false;
  }
  
  toggleAnimateInterchange(){
    this.animateInterchange =! this.animateInterchange
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.toggleOne = false;
      this.toggleTwo = false;
      this.toggleThree = false;
    }
  }

}
