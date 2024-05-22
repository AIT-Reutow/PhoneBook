import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {Contact} from "../../models/contact";
import {NgbAlert, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactEditComponent} from "../contact-edit/contact-edit.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../service/contact.service";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";

@Component({
  selector: 'ait-app-details',
  standalone: true,
  imports: [
    NgClass,
    NgbAlert
  ],
  templateUrl: './contact-details.component.html',
  styles: ``
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | undefined;

  constructor(private readonly modal: NgbModal,
              private readonly activatedRoute: ActivatedRoute,
              private readonly contactService: ContactService,
              private readonly router: Router
  ) {

  }

  ngOnInit(): void {
    const contactId: number = +this.activatedRoute.snapshot.paramMap.get('contactId')!;
    this.contact = this.contactService.getById(contactId);
  }

  onEdit(contactToEdit: Contact): void {
    const modalRef = this.modal.open(ContactEditComponent);
    modalRef.componentInstance.contact = contactToEdit;
    modalRef.closed.subscribe(() => {
      this.contact = this.contactService.getById(contactToEdit.id);
    });
  }

  onDelete(contactToDelete: Contact): void {
    const modalRef = this.modal.open(ConfirmDeleteComponent);
    modalRef.closed.subscribe(value => {
      if (value && value === 'Confirmed') {
        const isDeleted = this.contactService.delete(contactToDelete);
        if (isDeleted) {
          this.router.navigate(['/'])
            .then(v => console.log(v));
        }
      }
    });
  }
}
