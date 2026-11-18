import { Routes } from '@angular/router';
import { HomePage } from './home';
import { ProjectPage } from './project';
import { home, projects } from './portfolio.data';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage, title: home.titleLead + ' ' + home.titleEmphasis },
  ...projects.map(project => ({
    path: 'projects/' + project.slug,
    component: ProjectPage,
    data: { project },
    title: project.name + ' · Eddie 的作品集',
  })),
  { path: '**', redirectTo: '' },
];
