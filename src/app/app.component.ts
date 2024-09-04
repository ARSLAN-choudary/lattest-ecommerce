import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2,) {}

  ngOnInit(): void {
    // Initialize the theme based on stored preference
    this.isDarkMode = this.getThemeFromService();
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveThemeToService();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  getThemeFromService(): boolean {
    // Retrieve the theme setting from a service or local storage
    return localStorage.getItem('theme') === 'dark';
  }

  saveThemeToService(): void {
    // Save the theme setting to a service or local storage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
 

  toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark')) {
      this.renderer.removeClass(body, 'dark');
    } else {
      this.renderer.addClass(body, 'dark');
    }
  }
}
