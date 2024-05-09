import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { DataStoreService } from '../../services/core/data-store.service';
import { FlightSearchRequest } from '../../services/constants/types/data.types';

@Component({
  selector: 'app-flights-request',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './flights-request.component.html',
  styleUrl: './flights-request.component.css'
})
export class FlightsRequestComponent implements OnInit{

  constructor(private dataStore : DataStoreService){}

  flightsData! : FlightSearchRequest;

  ngOnInit(): void {
      this.dataStore.currentFlightRequests.subscribe({
        next: (n : any) => {
          this.flightsData = n;
        }
      })
  }

}
