import { Component } from '@angular/core';
import { CartCompoComponent } from "../../components/cart-compo/cart-compo.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartCompoComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

}
