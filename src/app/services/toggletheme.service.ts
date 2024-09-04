import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme: boolean = false; // Default to light theme

  constructor() {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    // Save theme preference in localStorage
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  private applyTheme() {
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
