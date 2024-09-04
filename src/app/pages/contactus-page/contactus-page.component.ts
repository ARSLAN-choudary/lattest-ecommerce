import { Component } from '@angular/core';
import { ContactusComponent } from "../../components/contactus/contactus.component";

@Component({
  selector: 'app-contactus-page',
  standalone: true,
  imports: [ContactusComponent],
  templateUrl: './contactus-page.component.html',
  styleUrl: './contactus-page.component.css'
})
export class ContactusPageComponent {

}
