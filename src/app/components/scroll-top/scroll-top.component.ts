import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
  show = false;
  nearFooter = false;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show when scrolled past 300px
    this.show = scrollY > 300;

    // Hide when near the footer (within 120px of bottom)
    this.nearFooter = scrollY + windowHeight > documentHeight - 120;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
