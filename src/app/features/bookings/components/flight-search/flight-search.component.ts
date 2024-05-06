import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, RouterLinkActive, NgClass],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

  flightClasses : String[] = [
    "Economy",
    "Premium Economy",
    "Business Class",
    "First Class"
  ]

}
