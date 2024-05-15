import { Component, HostListener } from '@angular/core';
import { DataStoreService } from '../../../../../services/core/data-store.service';
import { Router } from '@angular/router';
import { FlightSearchRequest, TravelDateTime } from '../../../../../services/constants/types/data.types';
import { SearchToFromComponent } from '../intake-components/search-to-from/search-to-from.component';
import { PassengersComponent } from '../intake-components/passengers/passengers.component';
import { NgClass } from '@angular/common';
import { DatePickerComponent } from '../intake-components/date-picker/date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-one-way',
  standalone: true,
  imports: [FormsModule, SearchToFromComponent, NzDatePickerModule, PassengersComponent, NgClass, DatePickerComponent],
  templateUrl: './one-way.component.html',
  styleUrl: './one-way.component.css'
})
export class OneWayComponent {

  constructor(private dataStore : DataStoreService, private router : Router){
    this.getFlightClassCabin();
  }

  leavingAirport : any;
  goingToAirport! : any;

  toggleOne: boolean = false;
  toggleTwo: boolean = false;
  toggleThree: boolean = false;

  date! : string;

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
                  date: this.date,
                  time: "10:00:00"
              }
          },
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
                  excludedCarrierCodes: ["TZ"]
              }
          }
      }
  };
  this.parseData(this.requestBody);
  }

  flightClass! : string;
  dateFormat = 'yyyy-MM-dd';

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

  onChange(result: Date): void {
    this.date = result.toISOString().substring(0, 10);
    console.log(this.date)
  }

}
