import { Component } from '@angular/core';
import { CaroselAndCardsComponent } from "../../components/carosel-and-cards/carosel-and-cards.component";

@Component({
  selector: 'app-allproducts-page',
  standalone: true,
  imports: [CaroselAndCardsComponent],
  templateUrl: './allproducts-page.component.html',
  styleUrl: './allproducts-page.component.css'
})
export class AllproductsPageComponent {

}
