import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-compo',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart-compo.component.html',
  styleUrls: ['./cart-compo.component.css']
})
export class CartCompoComponent {
  selectedProductArray: any[] = [];

  constructor(
    public router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.selectedProductArray = this.cartService.getCartItems().map(item => ({
      ...item,
      count: item.count || 1 // Ensure count is initialized properly
    }));
  }

  increase(item: any) {
    item.count++;
    this.cartService.updateItemQuantity(item.id, item.count); // Update quantity in CartService
  }

  decrease(item: any) {
    if (item.count > 1) {
      item.count--;
      this.cartService.updateItemQuantity(item.id, item.count); // Update quantity in CartService
    }
  }

  removeItem(item: any): void {
    this.cartService.removeFromCart(item); // Remove item from cart using CartService
    this.loadCartItems(); // Reload items to reflect changes
  }

  getTotalPrice(): number {
    return this.selectedProductArray.reduce((total, item) => total + item.price * item.count, 0);
  }
}
