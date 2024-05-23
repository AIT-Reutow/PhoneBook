import {Pipe, PipeTransform} from '@angular/core';
import {Contact} from "../../models/contact";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Contact[] | undefined, term: string): Contact[] {
    if (value) {
      return value.filter(c => c.lastName.includes(term) || c.firstName.includes(term));
    }
    return [];
  }

}
