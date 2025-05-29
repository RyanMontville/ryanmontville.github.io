import { CommonModule } from '@angular/common';
import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMobileMenu: boolean = false;
  private renderer: Renderer2;
  currentTheme: 'light_mode' | 'dark_mode' = 'light_mode';
  private readonly STORAGE_KEY = 'user-theme-preference';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const storedPreference = localStorage.getItem(this.STORAGE_KEY) as 'light_mode' | 'dark_mode';

    if (storedPreference) {
      this.currentTheme = storedPreference;
    } else {
      // **CRITICAL CHANGE HERE:**
      // If no stored preference, set 'currentTheme' to the *actual* system preference.
      // This means if the system is dark, internal state starts as 'dark_mode'.
      // If the system is light, internal state starts as 'light_mode'.
      // The user still *sees* it as system-controlled, but the toggle works predictably.
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark_mode' : 'light_mode';
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    this.renderer.removeClass(document.documentElement, 'light-mode');
    this.renderer.removeClass(document.documentElement, 'dark-mode');

    if (this.currentTheme === 'light_mode') {
      this.renderer.addClass(document.documentElement, 'light-mode');
      localStorage.setItem(this.STORAGE_KEY, 'light_mode');
    } else if (this.currentTheme === 'dark_mode') {
      this.renderer.addClass(document.documentElement, 'dark-mode');
      localStorage.setItem(this.STORAGE_KEY, 'dark_mode');
    } else { // currentTheme === 'system'
      // Only remove the localStorage item if the user *explicitly* selects 'system' from the toggle.
      // In this scenario, we don't apply a class, letting @media queries take over.
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

toggleTheme(): void {
  if (this.currentTheme === 'light_mode') {
    this.currentTheme = 'dark_mode';
  } else { // this.userPreference === 'system'
    // If we're currently in 'system' mode, and the user clicks,
    // they probably want to *force* a light mode first for simplicity.
    this.currentTheme = 'light_mode';
  }
  this.applyTheme();
}

  getCurrentTheme(): 'light_mode' | 'dark_mode' | 'system' {
    return this.currentTheme;
  }

  // No change needed here for the fix, but useful to keep.
  listenToSystemPreferenceChanges(): void {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // If the user's current preference is 'system', update the internal state
        // and reapply to reflect the system change (especially for UI icons).
        if (localStorage.getItem(this.STORAGE_KEY) === null) { // This means we are in 'system' mode
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.currentTheme = prefersDark ? 'dark_mode' : 'light_mode';
            this.applyTheme(); // Re-apply to update the internal state and potentially icon
        }
      });
    }
  }

}
