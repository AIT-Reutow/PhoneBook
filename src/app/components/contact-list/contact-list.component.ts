import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {ContactService} from "../../service/contact.service";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    ContactDetailsComponent,
    NgIf
  ]
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] | undefined;

  loadInProzess: boolean = true;

  constructor(private readonly modal: NgbModal,
              private readonly contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getAll();
    setTimeout(() => this.loadInProzess = false, 1500)
  }

  onDelete(contactToDelete: Contact): void {
    const modalRef = this.modal.open(ConfirmDeleteComponent);
    modalRef.closed.subscribe(value => {
      if (value && value === 'Confirmed') {
        this.contactService.delete(contactToDelete);
      }
    });
  }
}
