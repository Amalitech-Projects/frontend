import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { FooterComponent } from '../../core/components/footer/footer.component';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
