import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import { CommonModule } from '@angular/common';
import { LogoutModalComponent } from '../../components/logout-modal/logout-modal.component';
import { CartService } from '../../services/cart-service';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/toggletheme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, LogoutModalComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = true;
  itemCount: number = 0;
  isDarkMode = false; // Default to light mode

  constructor(
    private authGuard: AuthService,
    private router: Router,
    private cartService: CartService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.cartService.itemsCount$.subscribe(count => {
      this.itemCount = count;
    });
  }

  isAuthenticated(): boolean {
    return this.authGuard.isAuthenticated();
  }

  logout() {
    this.authGuard.logout();
    this.router.navigate(["/home"]);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  // saveThemeToService(): void {
  //   this.themeService.saveTheme(this.isDarkMode);
  // }
}
