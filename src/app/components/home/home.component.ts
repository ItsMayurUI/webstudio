import { Component, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('hero') heroRef!: ElementRef<HTMLElement>;

  private mx = 0;           // -1 .. 1
  private my = 0;           // -1 .. 1
  private rafPending = false;

  ngAfterViewInit(): void {
    // initialize CSS vars
    this.setVars(0, 0);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // skip small screens & coarse pointers (touch)
    const isDesktop = window.innerWidth >= 768 && matchMedia('(pointer:fine)').matches;
    if (!isDesktop || !this.heroRef) return;

    // normalize cursor relative to viewport center -> -1..1
    this.mx = (e.clientX / window.innerWidth - 0.5) * 2;
    this.my = (e.clientY / window.innerHeight - 0.5) * 2;

    if (!this.rafPending) {
      this.rafPending = true;
      requestAnimationFrame(() => {
        this.setVars(this.mx, this.my);
        this.rafPending = false;
      });
    }
  }

  private setVars(x: number, y: number) {
    const el = this.heroRef.nativeElement;
    el.style.setProperty('--mx', x.toFixed(3));
    el.style.setProperty('--my', y.toFixed(3));
  }
}
