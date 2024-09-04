import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sgnup-compo',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './sgnup-compo.component.html',
  styleUrl: './sgnup-compo.component.css'
})
export class SgnupCompoComponent {
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
}
