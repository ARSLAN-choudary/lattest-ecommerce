import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  totalItems: number = 0;
  totalPrice: number = 0;
  shippingCost: number = 5.00; 
  totalPriceWithShipping: number = 0;
  showThankYouModal = false;
  creditnum='';
  creditexp: any=''
  creditcvv:any=''
  paypalmail=''
  banknum=''
  bankname=''
  bitcoinadress=''

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.itemsCount$.subscribe(count => {
      this.totalItems = count;
    });

    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
      this.calculateTotalPriceWithShipping();
    });
  }

  calculateTotalPriceWithShipping() {
    this.totalPriceWithShipping = this.totalPrice + this.shippingCost;
  }
  selectedPaymentMethod: string = 'creditCard';

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }


  orderNumber: string = '1234567890'; 

  openThankYouModal() {
    this.showThankYouModal = true;
  }

  closeThankYouModal() {
    this.showThankYouModal = false;
  }

  conditionalfunc(): boolean {
    // Check for Credit Card Payment Method
    if (this.selectedPaymentMethod === 'creditCard') {
      return !(this.creditnum && this.creditexp && this.creditcvv);
    }
  
    // Check for PayPal Payment Method
    if (this.selectedPaymentMethod === 'paypal') {
      return !this.paypalmail;
    }
  
    // Check for Bank Transfer Payment Method
    if (this.selectedPaymentMethod === 'bankTransfer') {
      return !(this.banknum && this.bankname);
    }
  
    // Check for Bitcoin Payment Method
    if (this.selectedPaymentMethod === 'bitcoin') {
      return !this.bitcoinadress;
    }
  
    // By default, disable button
    return true;
  }
  
}
