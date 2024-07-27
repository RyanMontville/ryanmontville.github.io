import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-maze-generator',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './maze-generator.component.html',
  styleUrl: './maze-generator.component.css'
})
export class MazeGeneratorComponent {

}
