import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../../../services/core/data-store.service';
import { FlightServiceService } from '../../../../services/core/flight-service/flight-service.service';
import { FlightSearchRequest } from '../../../../services/constants/types/data.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-requests',
  standalone: true,
  imports: [],
  templateUrl: './loading-requests.component.html',
  styleUrl: './loading-requests.component.css'
})
export class LoadingRequestsComponent implements OnInit{

  constructor(private dataStore :  DataStoreService, private flight : FlightServiceService, private router : Router){}

  newRequest! : FlightSearchRequest;

  ngOnInit(): void {
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
        this.router.navigate(['/flight-requests'])
      }
    });
  }

}
