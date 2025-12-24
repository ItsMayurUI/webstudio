import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  isHidden = false;
  isScrolled = false;
  lastScrollY = 0;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;

    this.isHidden = y > this.lastScrollY && y > 80;
    this.isScrolled = y > 40;

    this.lastScrollY = y;
  }
}
