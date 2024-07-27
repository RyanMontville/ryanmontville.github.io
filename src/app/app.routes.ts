import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MazeGeneratorComponent } from './maze-generator/maze-generator.component';
import { CanvasStatsComponent } from './canvas-stats/canvas-stats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './maze-generator/demo/demo.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'maze', component: MazeGeneratorComponent},
    {path: 'read-more-canvas', component: CanvasStatsComponent},
    {path: 'maze/demo/:id', component: DemoComponent},
    {path: '**', component: PageNotFoundComponent},
];
