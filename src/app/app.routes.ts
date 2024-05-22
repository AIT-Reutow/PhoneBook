import {Routes} from '@angular/router';
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {ContactDetailsComponent} from "./components/contact-details/contact-details.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    children: [
      {
        path: 'nav', // contacts/nav
        component: NavBarComponent
      },
      {
        path: 'nav2', // contacts/nav2
        component: NavBarComponent
      },
    ]
  },
  {
    path: 'contacts/:contactId', //contacts/179
    component: ContactDetailsComponent
  }
];
