import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit {
  versionNumber: number = 3;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let paramVersionNumber = this.route.snapshot.paramMap.get('id');
    if (paramVersionNumber != null) {
      this.versionNumber = +paramVersionNumber;
    }
  }


}
