import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {ContactService} from "../../service/contact.service";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    ContactDetailsComponent,
    NgIf,
    NavBarComponent,
    RouterLink,
    RouterOutlet
  ]
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] | undefined;

  loadInProzess: boolean = true;

  constructor(private readonly modal: NgbModal,
              private readonly contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getAll()
      .subscribe();
    setTimeout(() => this.loadInProzess = false, 500)
  }
}
