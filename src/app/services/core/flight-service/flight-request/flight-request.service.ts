import { Injectable } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import { DataStoreService } from '../../data-store.service';
import { FlightSearchRequest } from '../../../constants/types/data.types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlightRequestService {

  constructor( private router : Router, private flight : FlightServiceService, private dataStore : DataStoreService) { }

  newRequest! : FlightSearchRequest;

  refreshRequest(){
      this.dataStore.currentRequest.subscribe({
        next:  (n:any) => {
          this.newRequest = n;
          console.log(n); 
        }
      });
      this.getFlight();
  }

  getFlight(){
    this.flight.getRoundTripFlight(this.newRequest).subscribe({
      next: (n : any) => {
        this.dataStore.parseFlightData(n);
      },
      error: (e) => {
        this.router.navigate([''])
      },
      complete: () => {
        // UPDATED request
      }
    });
  }
}
