import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  responsiveMenuActive : boolean = false;

  responsiveMenu(){
    this.responsiveMenuActive =! this.responsiveMenuActive;
  }
}
