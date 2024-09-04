import { Component } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-modal.component.html',
  styleUrl: './logout-modal.component.css'
})
export class LogoutModalComponent {
  isModalOpen = true;

  constructor(private authService: AuthService, private router: Router) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmLogout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.closeModal();
  }
}
