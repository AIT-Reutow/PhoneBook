import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactListComponent} from "./componets/contact-list/contact-list.component";
import {NavBarComponent} from "./componets/nav-bar/nav-bar.component";

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
