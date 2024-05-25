import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BasketButtonComponent } from '../../../features/basket-button/basket-button.component';
import { TripsButtonComponent } from '../../../features/trips-button/trips-button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/core/auth.service';
import { AuthenticatedUser } from '../../../services/constants/types/data.types';
import { get } from 'jquery';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgFor, NgIf,TripsButtonComponent ,BasketButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  responsiveMenuActive : boolean = false;
  responsiveMenuLogout : boolean = false;

  constructor(private router : Router, private auth : AuthService){}

  ngOnInit(): void {
   this.getUser();   
  }

  responsiveMenu(){
    this.responsiveMenuActive =! this.responsiveMenuActive;
  }

  logout(){
    this.auth.clearSession();
    this.router.navigate(['']);
    window.location.reload();
  }

  noUser!: boolean;

  userData! : AuthenticatedUser | null;

  getUser(){
    if(this.auth.getUser() == null){
      this.noUser = false;
    } else {
      this.noUser = true;
      this.userData = this.auth.getUser();
    }
  }

  profileInitial(){
   return this.auth.getUser()?.firstName.charAt(0);
  }

}