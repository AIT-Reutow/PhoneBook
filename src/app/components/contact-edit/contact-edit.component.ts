import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Contact} from "../../models/contact";
import {ContactService} from "../../service/contact.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-edit.component.html',
  styles: ``
})
export class ContactEditComponent implements OnInit {

  @Input()
  contact!: Contact;

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly contactService: ContactService,
              private readonly modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)]],
      lastName: [this.contact.lastName, []],
    })
  }

  onSubmit() {
    console.log("IsFormValid", this.form.valid);
    console.log("IsFormValid required", this.form.get('firstName')?.hasError('required'));
    console.log("has error maxLength", this.form.get('firstName')?.hasError('maxlength'));
    console.log("has error minLength", this.form.get('firstName')?.hasError('minlength'));
    console.log("Contact", this.form.value);

    // const newCon: Contact = {
    //   firstName: this.form.get('firstName')?.value,
    //   lastName: this.form.get('lastName')?.value,
    //   id: this.contact.id,
    //   phoneNumber: this.contact.phoneNumber,
    //   emails: this.contact.emails,
    //   address: this.contact.address
    // }

    this.contactService.edit(this.contact.id, this.form.value as Contact)
      .subscribe(value => this.modal.close(value));
  }

  getControl(controlName: string): AbstractControl {
    return this.form.controls[controlName];
  }
}
