import { Directive } from '@angular/core';

@Directive({
  selector: '[myCustomDer]',
  standalone: true
})
export class MyCDirective {

  constructor() { }

}
