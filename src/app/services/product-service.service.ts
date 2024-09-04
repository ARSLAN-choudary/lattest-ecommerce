import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  apiurl = 'https://fakestoreapi.com'

  cardindex: any
  cartProduct: any[] = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllProducts() {
    return this.http.get<any>(`${this.apiurl}/products`);
  }

  // Get product by ID
  getProductById(id: number) {
    return this.http.get<any>(`${this.apiurl}/products/${id}`);
  }

  // Get products by category
  getProductsByCategory(category: string) {
    return this.http.get<any>(`${this.apiurl}/products/category/${category}`);
  }

  // Get list of categories
  getCategories() {
    return this.http.get<any>(`${this.apiurl}/products/categories`);
  }
}
