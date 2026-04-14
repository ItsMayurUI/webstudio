import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-designer-pune',
  templateUrl: './web-designer-pune.component.html',
  styleUrls: ['./web-designer-pune.component.css']
})
export class WebDesignerPuneComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

 ngOnInit(): void {
  this.title.setTitle('Best Web Designer in Pune | Website Developer Pune');

  this.meta.updateTag({
    name: 'description',
    content: 'Best web designer in Pune offering modern, fast and affordable websites for businesses. Serving Pune & across India. Contact now.'
  });

  this.meta.updateTag({
    name: 'keywords',
    content: 'web designer Pune, website developer Pune, web design Pune India, freelance web developer Pune'
  });
}

}