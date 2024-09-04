import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToggleServeService } from '../../services/toggle-serve.service';
import { CommonModule } from '@angular/common';
import { LogoutModalComponent } from "../../components/logout-modal/logout-modal.component";
import { CartService } from '../../services/cart-service';
import { AuthService } from '../../authentication/auth.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule, LogoutModalComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isopen = false;
  constructor(private router: Router,private sideservice:ToggleServeService,private authGuard: AuthService, ) {}
  toggleSidebar() {
    this.sideservice.togglefunc();
  }

  navigateToCategory(category: string) {
    this.router.navigate(['/category', category]);
  }
 
  modalopn() {
    this.isopen = !this.isopen;
  }
  isAuthenticated(): boolean {
    return this.authGuard.isAuthenticated();
  }
}
