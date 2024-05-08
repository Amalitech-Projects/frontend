import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../services/core/auth.service';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, RouterLinkActive, NgClass],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

  flightClasses : String[] = [
    "ECONOMY",
    "BUSINESS",
    "FIRST-CLASS"
  ]

  test! : String;

  constructor(private tests : AuthService){
    tests.test().subscribe({
      next: (n) => {
        this.test = n;
      }
    })
  }



}
