import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project, projects } from './portfolio.data';

@Component({
  imports: [RouterLink],
  templateUrl: './project.html',
})
export class ProjectPage {
  readonly project = input.required<Project>();
  readonly nextProject = computed(() => {
    const current = projects.findIndex(item => item.slug === this.project().slug);
    return projects[(current + 1) % projects.length];
  });
}
