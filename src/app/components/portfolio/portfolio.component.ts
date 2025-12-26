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
      title: 'Sadguru Constructions',
      desc: 'Responsive Website For a Builder who delivering quality home.',
      image: 'assets/projects/sadguru/homepage.png',
      link: 'https://singular-cocada-303140.netlify.app/'
    },
    {
      title: 'Interior Design and craft by SK',
      desc: 'Online Store With Product Catalog, Cart, and Checkout System.',
      image: 'assets/projects/kotecha/body/cover.png',
      link: 'https://yourliveprojectlink.com'
    },
    {
      title: 'Croma Authorised Center',
      desc: 'Clean & minimal shop website to showcase my work.',
      image: 'assets/projects/sai/cover.jpg',
      link: 'https://mayurnirkhe.in/'
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
