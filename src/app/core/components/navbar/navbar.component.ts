import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BasketButtonComponent } from '../../../features/basket-button/basket-button.component';
import { TripsButtonComponent } from '../../../features/trips-button/trips-button.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgFor, NgIf,TripsButtonComponent ,BasketButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  responsiveMenuActive : boolean = false;

  constructor(private router : Router){}

  responsiveMenu(){
    this.responsiveMenuActive =! this.responsiveMenuActive;
  }

}