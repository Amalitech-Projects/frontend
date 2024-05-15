import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { DataStoreService } from '../../services/core/data-store.service';
import { FlightSearchRequest } from '../../services/constants/types/data.types';
import { LoadingRequestsComponent } from '../bookings/components/loading-requests/loading-requests.component';
import { FlightOfferResponse, FlightOffer } from '../../services/constants/types/flight-response.types';
import { FlightRequestService } from '../../services/core/flight-service/flight-request/flight-request.service';

@Component({
  selector: 'app-flights-request',
  standalone: true,
  imports: [NavbarComponent, LoadingRequestsComponent],
  templateUrl: './flights-request.component.html',
  styleUrl: './flights-request.component.css'
})
export class FlightsRequestComponent implements OnInit{

  constructor(private dataStore : DataStoreService, private refreshRequest : FlightRequestService){}

  flightsData! : FlightOffer[];


  ngOnInit(): void {
      this.dataStore.currentFlightRequests.subscribe({
        next: (n : FlightOffer[]) => {
          this.flightsData = n;
        },
        error: (e) =>{
          
        }
      });
      this.refreshRequest.refreshRequest();
  }

  formatDateTo12Hour(timestamp: string): string {
    const date = new Date(timestamp);
    
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; 

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedTime = `${hours}:${formattedMinutes}${amPm}`;

    return formattedTime;
}

formatDuration(duration: string): string {
  duration = duration.substring(2);

  let hours = '';
  let minutes = '';
  if (duration.includes('H')) {
      hours = duration.split('H')[0] + 'hrs ';
      duration = duration.split('H')[1];
  }
  if (duration.includes('M')) {
      minutes = duration.split('M')[0] + 'mins';
  }

  const formattedDuration = hours + minutes;
  return formattedDuration;
}

}
