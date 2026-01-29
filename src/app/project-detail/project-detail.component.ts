import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../data/projects';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: any;

  constructor(private route: ActivatedRoute,
              private location: Location
            ) {}

  goBack() {
  this.location.back();
}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.project = PROJECTS.find(
      p => p.slug === slug
    );

    console.log('Slug:', slug);
    console.log('Project:', this.project);
  }
}
