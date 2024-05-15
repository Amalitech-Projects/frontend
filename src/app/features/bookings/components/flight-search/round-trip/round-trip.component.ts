import { Component, HostListener } from '@angular/core';
import { SearchToFromComponent } from '../intake-components/search-to-from/search-to-from.component';
import { NgClass } from '@angular/common';
import { DatePickerComponent } from '../intake-components/date-picker/date-picker.component';
import { PassengersComponent } from '../intake-components/passengers/passengers.component';
import { FlightSearchRequest, TravelDateTime, Traveler } from '../../../../../services/constants/types/data.types';
import { DataStoreService } from '../../../../../services/core/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-round-trip',
  standalone: true,
  imports: [SearchToFromComponent, DatePickerComponent, PassengersComponent, NgClass],
  templateUrl: './round-trip.component.html',
  styleUrl: './round-trip.component.css'
})
export class RoundTripComponent {

  constructor(private dataStore : DataStoreService, private router : Router){
    this.getFlightClassCabin();
  }

  leavingAirport : any;
  goingToAirport! : any;

  toggleOne: boolean = false;
  toggleTwo: boolean = false;
  toggleThree: boolean = false;

  dateIntervals! : TravelDateTime;

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
                  date: this.dateIntervals.start,
                  time: "10:00:00"
              }
          },
          {
              id: "2",
              originLocationCode: this.goingToAirport?.address?.cityCode,
              destinationLocationCode: this.leavingAirport?.address?.cityCode,
              departureDateTimeRange: {
                  date: this.dateIntervals.end,
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
                      cabin: this.getFlightClassCabin(),
                      coverage: "MOST_SEGMENTS",
                      originDestinationIds: ["1"]
                  }
              ],
              carrierRestrictions: {
                  excludedCarrierCodes: ["AA", "TP"]
              }
          }
      }
  };
  this.parseData(this.requestBody);
  }

  flightClass! : string;

  getFlightClassCabin(){
    this.dataStore.currentFlightClass.subscribe({next: (n : any) => this.flightClass = n});
    console.log(this.flightClass);
    return this.flightClass;
  }

  parseData(data  : any){
    this.getFlightClassCabin();
    this.dataStore.parseFlightRequest(data);
    this.router.navigate(['../request'])
  }

}
