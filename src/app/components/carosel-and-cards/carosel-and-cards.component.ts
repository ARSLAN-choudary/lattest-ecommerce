import { Component, OnInit, Optional } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-carosel-and-cards',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './carosel-and-cards.component.html',
  styleUrl: './carosel-and-cards.component.css'
})
export class CaroselAndCardsComponent implements OnInit {
  product: any = []
  category: any = []
  products: any;

  constructor(@Optional() private refproduct: ProductServiceService, public router: Router) { }


  ngOnInit() {
    this.refproduct.getAllProducts().subscribe(data => {
      this.products = data

    })
  }

  sendData(index: any) {

    this.refproduct.cardindex = index

    this.refproduct.getAllProducts().subscribe(data => {


      data.forEach((element: any) => {

        if (data[this.refproduct.cardindex].id === element.id) {
          this.refproduct.cartProduct.push(element)
        }
      })
    });

    this.router.navigateByUrl('/selected-product');
  }




  
}









