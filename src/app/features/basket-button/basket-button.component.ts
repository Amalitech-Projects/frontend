import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlightServiceService } from '../../services/core/flight-service/flight-service.service';

@Component({
  selector: 'app-basket-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './basket-button.component.html',
  styleUrl: './basket-button.component.css'
})
export class BasketButtonComponent implements OnInit{

  constructor(private flight :  FlightServiceService){}

  carts :  any;

  itemsInCart : number = 0;

  ngOnInit(): void {
      this.getCartData();
  }

  getCartData(){
    this.flight.getCart().subscribe({
      next: (n : any) => {
        this.carts = n;
        if(n.length() == 0){
          this.itemsInCart = 0;
        } else{
          this.itemsInCart = n.length()
        }
      },
      error : (e) => {
        console.log(e);
      }
    })
  }
}
