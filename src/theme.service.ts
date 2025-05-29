import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' | 'system' = 'system';
  private readonly STORAGE_KEY = 'user-theme-preference';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const storedPreference = localStorage.getItem(this.STORAGE_KEY) as 'light' | 'dark' | 'system';

    if (storedPreference) {
      this.currentTheme = storedPreference;
    } else {
      this.currentTheme = 'system';
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    this.renderer.removeClass(document.documentElement, 'light-mode');
    this.renderer.removeClass(document.documentElement, 'dark-mode');

    if (this.currentTheme === 'light') {
      this.renderer.addClass(document.documentElement, 'light-mode');
      localStorage.setItem(this.STORAGE_KEY, 'light');
    } else if (this.currentTheme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark-mode');
      localStorage.setItem(this.STORAGE_KEY, 'dark');
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  toggleTheme(): void {
    if (this.currentTheme === 'dark') {
      this.currentTheme = 'light';
    } else {
      this.currentTheme = 'system';
    }
    this.applyTheme();
  }

  getCurrentTheme(): 'light' | 'dark' | 'system' {
    return this.currentTheme;
  }

  listenToSystemPreferenceChanges(): void {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (this.currentTheme === 'system') {
          this.applyTheme();
        }
      });
    }
  }
}