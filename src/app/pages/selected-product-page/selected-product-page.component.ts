import { Component } from '@angular/core';
import { SelectedProductComponent } from "../../components/selected-product/selected-product.component";

@Component({
  selector: 'app-selected-product-page',
  standalone: true,
  imports: [SelectedProductComponent],
  templateUrl: './selected-product-page.component.html',
  styleUrl: './selected-product-page.component.css'
})
export class SelectedProductPageComponent {

}
