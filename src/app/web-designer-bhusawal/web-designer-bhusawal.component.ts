import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-designer-bhusawal',
  templateUrl: './web-designer-bhusawal.component.html',
  styleUrls: ['./web-designer-bhusawal.component.css']
})
export class WebDesignerBhusawalComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Best Web Designer in Bhusawal | Affordable Website Developer');

    this.meta.updateTag({
      name: 'description',
      content: 'Looking for the best web designer in Bhusawal? I create modern, fast, and affordable websites for local businesses. Contact now.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'web designer in Bhusawal, website developer Bhusawal, affordable web design, web developer near me'
    });
  }

}