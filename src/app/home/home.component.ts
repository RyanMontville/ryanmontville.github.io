import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Project } from '../project.model';
import { projectsData } from '../data';
import { ProjectOverviewComponent } from "../project-overview/project-overview.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ProjectOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projectsToShow: Project[] = projectsData;
  projectsHeader: string = "All Projects";
  isArrayFiltered: boolean = false;

  filterProjects(value: any) {
    let skill = value.target.value; 
    if (skill === 'All Projects') {
      this.isArrayFiltered = false;
      this.projectsHeader = "All Projects";
      this.projectsToShow = projectsData;
    } else {
      this.projectsHeader = `Projects that use ${skill}`;
      this.isArrayFiltered = true;
      this.projectsToShow = projectsData.filter(project => {
        return project.skills.includes(skill);
      });
    }
  }
}
