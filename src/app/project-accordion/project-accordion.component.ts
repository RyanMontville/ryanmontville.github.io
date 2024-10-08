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

  displayImg(skill: string) {
    switch (skill) {
      case 'Java': { return "https://camo.githubusercontent.com/26e74d6ef4bb4726fc8f8a6b3d4136376d691ecf85c8d3b464bfbf4259e5698d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661266c6f676f436f6c6f723d7768697465"; }
      case 'Python': { return "https://camo.githubusercontent.com/92b4afa6ad14b869611008b6ebb370d7bbff8051553d43d15a18ff5d124510cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d2532333131374143392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d507974686f6e266c6f676f436f6c6f723d7768697465"; }
      case 'C#': { return "https://camo.githubusercontent.com/20b9177e58a90fa0d7b42200f157f22089e4ae9f781ed98293d1de3b69486590/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f432532332d3233393132303f7374796c653d666f722d7468652d6261646765266c6f676f3d632d7368617270266c6f676f436f6c6f723d7768697465"; }
      case 'HTML': { return "https://camo.githubusercontent.com/5e7e215d9ff3a7c2e96d09232c11b2205565c841d1129dd2185ebd967284121f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"; }
      case 'CSS': { return "https://camo.githubusercontent.com/6531a4161596e3d9fdab3d0499a7b7ce5c5c8b568be219f3e9707af042e575d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"; }
      case 'JavaScript': { return "https://img.shields.io/badge/JavaScript-141414?style=for-the-badge&logo=javascript&logoColor=F7DF1E"; }
      case 'TypeScript': { return "https://camo.githubusercontent.com/a00920b123df05b3df5e368e509f18bacd65bc5909698fb42be5f35063550f47/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"; }
      case 'Spring Boot': { return "https://camo.githubusercontent.com/89234b0d504142af835b602d14a4895088023bb3c9681a616d4b4e19dc91be23/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f537072696e675f426f6f742d4632463446393f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e672d626f6f74"; }
      case 'PostgreSQL': { return "https://camo.githubusercontent.com/6854ba9612c2cb025e7c65445787d93f6436d4691303601506e0bc28be2ae9b8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f737467726553514c2d3331363139323f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"; }
      case 'JSON': { return "https://camo.githubusercontent.com/0f16dfeeaeef040e8ebf06c6330752c38ea27ea1b682e627eae863cf465e7202/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a736f6e2d3545354335433f7374796c653d666f722d7468652d6261646765266c6f676f3d6a736f6e266c6f676f436f6c6f723d7768697465"; }
      case 'Vue.js': { return "https://camo.githubusercontent.com/f9dcdd1cfaca52d120fc5382d062172f654c06afa24136899b099d0fed499dcf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7675656a732d2532333335343935652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d767565646f746a73266c6f676f436f6c6f723d253233344643303844"; }
      case 'React.js': { return "https://camo.githubusercontent.com/3babc94d778f96441b3a66615fb5ee88c6ed04f174ed49b04df92b071a7d0e80/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"; }
      case 'Angular': { return "https://camo.githubusercontent.com/bacdca35c8a78ba29d82e45df864b3d29818db289207bbdca4ce6a9360436c21/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616e67756c61722d2532334444303033312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465"; }
      case 'Bootstrap': { return "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=for-the-badge"; }
      case 'Turtle Graphics': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/Turtle%20Grpahics.png"; }
      case 'Blazor': { return "https://img.shields.io/badge/Blazor-512BD4?logo=blazor&logoColor=fff&style=for-the-badge"; }
      case 'Flask': { return "https://img.shields.io/badge/Flask-58CC02?style=for-the-badge&logo=flask&logoColor=white"; }
      case 'Node.js': { return "https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"; }
      case 'Intentionally Bad Design': { return "https://raw.githubusercontent.com/RyanMontville/ryanmontville.github.io/main/images/intbaddes.png"; }
      default: {return ""; break;}
    }
  }
}
