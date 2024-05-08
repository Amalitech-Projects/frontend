import { Component, HostListener } from '@angular/core';
import { SearchToFromComponent } from '../intake-components/search-to-from/search-to-from.component';
import { NgClass } from '@angular/common';
import { DatePickerComponent } from '../intake-components/date-picker/date-picker.component';
import { PassengersComponent } from '../intake-components/passengers/passengers.component';
import { FlightSearchRequest, Traveler } from '../../../../../services/constants/types/data.types';

@Component({
  selector: 'app-round-trip',
  standalone: true,
  imports: [SearchToFromComponent, DatePickerComponent, PassengersComponent, NgClass],
  templateUrl: './round-trip.component.html',
  styleUrl: './round-trip.component.css'
})
export class RoundTripComponent {

  leavingAirport : any;
  goingToAirport! : any;

  toggleOne: boolean = false;
  toggleTwo: boolean = false;
  toggleThree: boolean = false;

  travelers : any[] = [
    {
      id : "1",
      travelerType : "ADULT",
      fareOptions: ["STANDARD"]
    }
  ];


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
    this.swap();
  }

  swap(){
    var first = this.leavingAirport;
    var second = this.goingToAirport;
    this.leavingAirport = second;
    this.goingToAirport = first;
   
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.toggleOne = false;
      this.toggleTwo = false;
      this.toggleThree = false;
    }
  }

  requestBody! : FlightSearchRequest;
   

  sendToLoadingPage(){
    this.requestBody = {
      currencyCode: "USD",
      originDestinations: [
          {
              id: "1",
              originLocationCode: this.leavingAirport?.address?.cityCode,
              destinationLocationCode: this.goingToAirport?.address?.cityCode,
              departureDateTimeRange: {
                  date: "2024-05-12",
                  time: "10:00:00"
              }
          },
          {
              id: "2",
              originLocationCode: this.goingToAirport?.address?.cityCode,
              destinationLocationCode: this.leavingAirport?.address?.cityCode,
              departureDateTimeRange: {
                  date: "2024-12-02",
                  time: "17:00:00"
              }
          }
      ],
      travelers: this.travelers,
      sources: ["GDS"],
      searchCriteria: {
          maxFlightOffers: 2,
          flightFilters: {
              cabinRestrictions: [
                  {
                      cabin: "BUSINESS",
                      coverage: "MOST_SEGMENTS",
                      originDestinationIds: ["1"]
                  }
              ],
              carrierRestrictions: {
                  excludedCarrierCodes: ["AA", "TP", "AZ"]
              }
          }
      }
  };
  }

}
