import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  isScrolled = false;
  isHidden = false;
  lastScrollY = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
  } // ✅ constructor properly closed

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    /* ✅ AUTO-CLOSE MENU ON SCROLL (MOBILE ONLY) */
    if (isMobile && this.menuOpen) {
      this.menuOpen = false;
    }

    // shadow effect (all devices)
    this.isScrolled = currentScrollY > 10;

    // hide/show ONLY on mobile
    if (isMobile) {
      this.isHidden =
        currentScrollY > this.lastScrollY && currentScrollY > 80;
    } else {
      this.isHidden = false;
    }

    this.lastScrollY = currentScrollY;
  }
}
