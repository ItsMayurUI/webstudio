// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-portfolio',
//   templateUrl: './portfolio.component.html',
//   styleUrls: ['./portfolio.component.css']
// })
// export class PortfolioComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      title: 'Raghav Veg',
      desc: 'Angular-based restaurant platform with digital menu and order flow.',
      image: 'assets/projects/raghavveg/cover1.webp',
      link: 'https://raghavpureveg.netlify.app/'
    },
    {
      title: 'Raghav Fitness',
      desc: 'Angular web app for gym, performance insights and analytics.',
      image: 'assets/projects/raghavfitness/cover1.webp',
      link: 'https://raghavfitness.netlify.app/'
    },
    {
      title: 'Interior Design and craft by SK',
      desc: 'A high-conversion portfolio website designed to showcase creativity and attract clients.',
      image: 'assets/projects/kotecha/cover1.webp',
      link: 'https://craftbysk.netlify.app/'
    },
    {
      title: 'Solar Pro',
      desc: 'SEO-friendly Angular website for solar installation businesses.',
      image: 'assets/projects/solarpro/cover1.webp',
      link: 'https://raghavsolar.netlify.app/'
    },
    {
      title: 'Sadguru Constructions',
      desc: 'Responsive real-estate website with optimized property showcase.',
      image: 'assets/projects/sadguru/cover1.webp',
      link: 'https://sadgurubuilders.netlify.app/'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
