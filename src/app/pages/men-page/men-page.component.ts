import { Component } from '@angular/core';
import { MenCompoComponent } from "../../components/men-compo/men-compo.component";

@Component({
  selector: 'app-men-page',
  standalone: true,
  imports: [MenCompoComponent],
  templateUrl: './men-page.component.html',
  styleUrl: './men-page.component.css'
})
export class MenPageComponent {

}
