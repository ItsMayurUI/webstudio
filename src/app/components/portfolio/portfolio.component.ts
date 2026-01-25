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
      desc: 'Responsive Website For a hotel who delivering quality dishes & aminities.',
      image: 'assets/projects/raghavveg/cover.webp',
      link: 'https://raghavpureveg.netlify.app/'
    },
    {
      title: 'Interior Design and craft by SK',
      desc: 'Online Store With Product Catalog, Cart, and Checkout System.',
      image: 'assets/projects/kotecha/body/cover.png',
      link: 'https://craftbysk.netlify.app/'
    },
    {
      title: 'Croma Authorised Center',
      desc: 'Clean & minimal shop website to showcase my work.',
      image: 'assets/projects/sai/cover.jpg',
      link: 'https://mayurnirkhe.in/'
    },
    {
      title: 'Sadguru Constructions',
      desc: 'Responsive Website For a Builder who delivering quality home.',
      image: 'assets/projects/sadguru/homepage.png',
      link: 'https://sadgurubuilders.netlify.app/'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
