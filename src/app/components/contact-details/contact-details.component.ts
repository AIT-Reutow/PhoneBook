import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {Contact} from "../../models/contact";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactEditComponent} from "../contact-edit/contact-edit.component";

@Component({
  selector: 'ait-app-details',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './contact-details.component.html',
  styles: ``
})
export class ContactDetailsComponent {

  @Input("contactToDisplay")
  contact!: Contact;

  @Input()
  isEven: boolean = false;

  @Output()
  contactDeleted: EventEmitter<Contact> = new EventEmitter();

  constructor(private readonly modal: NgbModal) {
  }

  onEdit(contactToEdit: Contact): void {
    const modalRef = this.modal.open(ContactEditComponent);
    modalRef.componentInstance.contact = contactToEdit;
  }

  onDelete(contact: Contact): void {
    this.contactDeleted.emit(contact);
  }
}
