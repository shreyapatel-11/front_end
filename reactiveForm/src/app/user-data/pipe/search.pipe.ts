import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(emp: Employee[], search: string): Employee[] {
    return emp.filter((data: Employee) => {
      return data.firstName.toLocaleLowerCase().match(search.toLocaleLowerCase())
    })
  }

}
