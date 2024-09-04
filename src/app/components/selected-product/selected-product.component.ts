import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';


@Component({
  selector: 'app-selected-product',
  standalone: true,
  imports: [ CommonModule,RouterLink ],
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css'] // styleUrl ko styleUrls se replace karen
})
export class SelectedProductComponent implements OnInit {
  selectedProduct: any;
  constructor(
    private route: ActivatedRoute,
    private myservice: ProductServiceService,
    private cartService: CartService,
    private router: Router // Properly declare 'router' here
  ) {}

  ngOnInit() {
    this.myservice.getAllProducts().subscribe(data => {
      this.selectedProduct = data[this.myservice.cardindex];
      
      
      
    });
  }
  BuyNow(product: any) {
    this.cartService.addToCart(product); 
    this.router.navigate(['/cart-page']); 
  }
}
