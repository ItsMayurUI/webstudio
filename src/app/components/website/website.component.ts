
import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {

  // Show only website projects
  projects = PROJECTS.filter(
    project => project.category === 'website'
  );

}
