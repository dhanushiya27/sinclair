import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isMenuOpen: boolean = false;
  @Input() isHomePage!: boolean;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  navigationItems = [
    { link: '/home', text: 'HOME' },
    { link: '/about', text: 'ABOUT' },
    { link: '/course', text: 'COURSE' },
    { link: '/blog', text: 'BLOG' },
    { link: '/signup', text: 'SIGNUP' },
  ];
}
