import { Component } from '@angular/core';
import { AboutusComponent } from "../../components/aboutus/aboutus.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutusComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
