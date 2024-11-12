import { Component, Input } from '@angular/core';
import { Link, Project } from '../project.model';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.css'
})
export class ProjectOverviewComponent {
  @Input() project!: Project;

  displayImg(skill: string) {
    switch (skill) {
      case 'Java': { return "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"; }
      case 'Python': { return "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"; }
      case 'C#': { return "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"; }
      case 'HTML': { return "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"; }
      case 'CSS': { return "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"; }
      case 'JavaScript': { return "https://img.shields.io/badge/JavaScript-141414?style=for-the-badge&logo=javascript&logoColor=F7DF1E"; }
      case 'TypeScript': { return "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"; }
      case 'Spring Boot': { return "https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot"; }
      case 'PostgreSQL': { return "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"; }
      case 'JSON': { return "https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"; }
      case 'Vue.js': { return "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"; }
      case 'React.js': { return "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"; }
      case 'Angular': { return "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"; }
      case 'Bootstrap': { return "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge"; }
      case 'Turtle Graphics': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/Turtle%20Grpahics.png"; }
      case 'Blazor': { return "https://img.shields.io/badge/Blazor-512BD4?logo=blazor&logoColor=fff&style=for-the-badge"; }
      case 'Flask': { return "https://img.shields.io/badge/Flask-58CC02?style=for-the-badge&logo=flask&logoColor=white"; }
      case 'Node.js': { return "https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"; }
      case 'Intentionally Bad Design': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/intbaddes.png"; }
      case 'MySQL': { return "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"; }
      case 'PHP': { return "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"; }
      default: {return ""; break;}
    }
  }
}
