import { Component } from '@angular/core';
import { SgnupCompoComponent } from "../../components/sgnup-compo/sgnup-compo.component";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [SgnupCompoComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

}
