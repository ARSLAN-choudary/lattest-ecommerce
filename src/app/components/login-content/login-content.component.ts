import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';



@Component({
  selector: 'app-login-content',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.css'
})
export class LoginContentComponent{
  user = {
    username: '',
    password: ''
  };

  onSubmit(): void {
    if (this.user.username && this.user.password.length >= 6) {
      localStorage.setItem('userData', JSON.stringify(this.user));
      alert('Registration successful!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(){
    this.authService.login();
    this.router.navigate(["/"])
  }
}

