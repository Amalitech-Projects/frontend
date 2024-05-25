import { Component } from '@angular/core';
import {  } from 'angular4-paystack';

@Component({
  selector: 'app-payment-button',
  standalone: true,
  imports: [],
  templateUrl: './payment-button.component.html',
  styleUrl: './payment-button.component.css'
})
export class PaymentButtonComponent {


  title!: string;
  tRef!: string;

 
  paymentDone(ref:any) {
    console.log(ref)
    this.title = `Payment Complete` + ref
    console.log(this.title)
  }

  resetTitle() {
    console.log(this.title)
  }
  
  paymentCancel() {
    this.title = `Payment Cancelled`
  }

  ngOnInit() {
    this.tRef = `${Math.random() *10000000}`
  }

}
