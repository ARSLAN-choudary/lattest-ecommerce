import { Component } from '@angular/core';
import { LoginContentComponent } from "../../components/login-content/login-content.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginContentComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
