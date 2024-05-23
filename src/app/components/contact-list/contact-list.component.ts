import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {ContactService} from "../../service/contact.service";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";
import {FilterPipe} from "../contact-details/filter.pipe";
import {FormsModule} from "@angular/forms";


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
    RouterOutlet,
    FilterPipe,
    FormsModule
  ]
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] | undefined;

  loadInProzess: boolean = true;
  // private contactSubscription: Subscription | undefined;
  private contactSubscriptions: Subscription[] = [];
  term: string = '';

  constructor(private readonly modal: NgbModal,
              private readonly contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactSubscriptions.push(this.contactService.getAll()
      // .pipe(first())
      .subscribe({
        next: (value: Contact[]) => this.handleReq(value),
        complete: () => this.loadInProzess = false
      })
    )
  }

  private handleReq(value: Contact[]): void {
    this.contacts = value;
    // this.loadInProzess = false;
  }

  ngOnDestroy(): void {
    // if (this.contactSubscription) {
    //   this.contactSubscription.unsubscribe();
    // }
    this.contactSubscriptions.forEach(s => s.unsubscribe())
  }
}
