import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { home, projects } from './portfolio.data';

@Component({
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomePage {
  readonly home = home;
  readonly projects = projects;
}
