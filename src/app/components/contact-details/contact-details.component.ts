import {Component, OnInit} from '@angular/core';
import {DatePipe, NgClass, SlicePipe, TitleCasePipe} from "@angular/common";
import {Contact} from "../../models/contact";
import {NgbAlert, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactEditComponent} from "../contact-edit/contact-edit.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../service/contact.service";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";
import {first} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FilterPipe} from "./filter.pipe";

@Component({
  selector: 'ait-app-details',
  standalone: true,
  imports: [
    NgClass,
    NgbAlert,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    FilterPipe
  ],
  templateUrl: './contact-details.component.html',
  styles: ``
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | undefined;
  protected errorMsg: string | undefined;

  constructor(private readonly modal: NgbModal,
              private readonly activatedRoute: ActivatedRoute,
              private readonly contactService: ContactService,
              private readonly router: Router
  ) {

  }

  ngOnInit(): void {
    const contactId: number = +this.activatedRoute.snapshot.paramMap.get('contactId')!;
    this.errorMsg = undefined;
    this.getContactById(contactId);
  }

  private getContactById(contactId: number) {
    this.contactService.getById(contactId)
      .pipe(first())
      .subscribe({
        next: value => {
          this.contact = value;
          this.errorMsg = undefined;
        },
        error: error => this.handleError(error)
      });
  }

  onEdit(): void {
    const modalRef = this.modal.open(ContactEditComponent);
    modalRef.componentInstance.contact = this.contact;
    modalRef.closed.subscribe((updatedContact: Contact) => this.contact = updatedContact);
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 500) {
      this.errorMsg = 'Something went wrong'
    }
    this.errorMsg = error.error.message;
  }
}
