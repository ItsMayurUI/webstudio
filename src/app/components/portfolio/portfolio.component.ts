import { Component, AfterViewInit } from '@angular/core';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  projects = PROJECTS;
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

  // 👇 MOBILE MAC-DOCK EFFECT
  ngAfterViewInit(): void {

    // Only for mobile
    if (window.innerWidth > 768) return;

    const dock = document.querySelector('.dock') as HTMLElement;
    const items = document.querySelectorAll('.dock-item') as NodeListOf<HTMLElement>;

    if (!dock || !items.length) return;

    dock.addEventListener('touchmove', (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;

      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(touchX - center);

        const maxDistance = 120;
        const scale = Math.max(1, 1.6 - distance / maxDistance);

        item.style.transform =
          `scale(${scale}) translateY(${(scale - 1) * -18}px)`;
      });
    });

    dock.addEventListener('touchend', () => {
      items.forEach(item => {
        item.style.transform = '';
      });
    });
  }
}
