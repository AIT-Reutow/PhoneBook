import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactListComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Students';
}
