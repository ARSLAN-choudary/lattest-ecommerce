import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-men-compo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men-compo.component.html',
  styleUrl: './men-compo.component.css'
})
export class MenCompoComponent {
  products: any[] | null = null;
  category: string | null = null;



  constructor(
    private route: ActivatedRoute,
    private myservice: ProductServiceService,
    private cartService: CartService,
    private router: Router // Properly declare 'router' here
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category) {
        // Adjust category name based on available categories
        const adjustedCategory = this.adjustCategoryName(this.category);
        this.fetchProducts(adjustedCategory);
      }
    });
  }

  adjustCategoryName(category: string | null): string {
    if (category === 'men') {
      return "men's clothing";
    } else if (category === 'women') {
      return "women's clothing";
    }
    return category || '';
  }

  fetchProducts(category: string) {
    this.myservice.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  trackByFn(index: number, item: any): number {
    return item.id;
  }
  onBuyNow(product: any) {
    this.cartService.addToCart(product); // Add product to cart service
    this.router.navigate(['/cart-page']); // Navigate to cart page
  }
}
