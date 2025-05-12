import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Link, Project } from '../project.model';
import { projectsData } from '../data';
import { ProjectOverviewComponent } from "../project-overview/project-overview.component";
import { ProjectAccordionComponent } from "../project-accordion/project-accordion.component";
import { TheService } from '../the.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ProjectOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projectsToShow: Project[] = projectsData;
  projectsHeader: string = "All Projects";
  isArrayFiltered: boolean = false;

  constructor(
    private theService: TheService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let param = this.route.snapshot.queryParamMap.get('goto');
    if (param) {
      this.theService.goTo(param);
    }
  }

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

  displayFirstPartOnly(title: string) {
    let parts = title.split(" - ");
    return parts[0];
  }

  displayFirstImageOnly(imageArray: Link[]) {
    return imageArray[0];
  }
}
