import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightSearchRequest } from '../constants/types/data.types';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  private requestStore = new BehaviorSubject<any>(null)
  currentRequest = this.requestStore.asObservable();
  parseFlightRequest(flightData: any){
    this.requestStore.next(flightData);
  }
  
  private classFlightStore = new BehaviorSubject<any>(null)
  currentFlightClass = this.classFlightStore.asObservable();
  parseFlightClass(flightClass: any){
    this.classFlightStore.next(flightClass);
  }
  
  private requestedFlights = new BehaviorSubject<any>(null)
  currentFlightRequests = this.requestedFlights.asObservable();
  parseFlightData(review: any){
    this.requestedFlights.next(review);
  }
}
