import { Component } from '@angular/core';
import { PaymentButtonComponent } from '../payment-button/payment-button.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [PaymentButtonComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

}
