import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Navbar</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  `,
  styles: ``
})
export class NavBarComponent {

}
