import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-delete',
  standalone: true,
  imports: [],
  template: `
    <div class="modal-body">
      <h4>Confirm delete contact</h4>
      <hr>
      <div class="mt-5">
        <button class="btn btn-warning" (click)="confirmDelete()">Confirm</button>
        <button class="btn btn-secondary" (click)="activeModal.dismiss('Canceled')">Cancel</button>
      </div>
    </div>
  `,
  styles: ``
})
export class ConfirmDeleteComponent {

  constructor(protected readonly activeModal: NgbActiveModal) {
  }

  confirmDelete(): void {
    this.activeModal.close("Confirmed");
  }
}
