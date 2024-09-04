import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = []; // Cart items ko store karne ke liye
  private itemsCount = new BehaviorSubject<number>(0); // Items count ko track karne ke liye
  private totalPrice = new BehaviorSubject<number>(0); // Total price ko track karne ke liye

  itemsCount$ = this.itemsCount.asObservable();
  totalPrice$ = this.totalPrice.asObservable();

  constructor() {
    // Initialize cart items from localStorage
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
      this.updateCartSummary();
    }
  }

  addToCart(item: any): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.count += item.count; // Increase the count if item already exists
    } else {
      this.items.push(item); // Add new item
    }
    this.saveCartToLocalStorage();
    this.updateCartSummary();
  }

  removeFromCart(item: any): void {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCartToLocalStorage();
      this.updateCartSummary();
    }
  }

  updateCartItem(updatedItem: any) {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index > -1) {
      this.items[index] = updatedItem;
      this.saveCartToLocalStorage();
      this.updateCartSummary();
    }
  }

  updateItemQuantity(itemId: any, quantity: number): void {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      item.count = quantity;
      this.saveCartToLocalStorage();
      this.updateCartSummary();
    }
  }

  private updateCartSummary(): void {
    const totalItems = this.items.reduce((count, item) => count + item.count, 0);
    const totalPrice = this.items.reduce((total, item) => total + item.price * item.count, 0);
    this.itemsCount.next(totalItems);
    this.totalPrice.next(totalPrice);
  }

  getCartItems(): any[] {
    return this.items;
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
}
