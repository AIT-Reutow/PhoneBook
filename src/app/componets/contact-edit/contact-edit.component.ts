import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Contact} from "../../modles/contact";

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-edit.component.html',
  styles: ``
})
export class ContactEditComponent {

  @Input()
  contact!: Contact;


  onSubmit() {
    console.log("Contact", this.contact);
  }
}
