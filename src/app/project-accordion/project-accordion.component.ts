import { Component, Input } from '@angular/core';
import { Link, Project } from '../project.model';

@Component({
  selector: 'app-project-accordion',
  standalone: true,
  imports: [],
  templateUrl: './project-accordion.component.html',
  styleUrl: './project-accordion.component.css'
})
export class ProjectAccordionComponent {
  @Input() project!: Project;
  expand:boolean = false;

  displayFirstImage(screenshots: Link[]) {
    return screenshots[0].linkURL;
  }
}
