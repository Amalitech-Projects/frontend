import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../services/core/auth.service';
import { DataStoreService } from '../../../../services/core/data-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, RouterLinkActive, NgClass, FormsModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

  flightClasses : string[] = [
    "ECONOMY",
    "BUSINESS"
 ]

  flightClass : string = "ECONOMY";

  test! : String;

  constructor(private tests : AuthService, private dataStore : DataStoreService){
   
  }

  currentFlightClass(item : string){
    this.dataStore.parseFlightClass(item);
  }

}
