import { Pipe, PipeTransform } from '@angular/core';
import { employeeData } from '../model/user.model';

@Pipe({
  name: 'searches'
})
export class SearchesPipe implements PipeTransform {

  transform(emp: employeeData[], search: string): employeeData[] {
    return emp.filter((data: employeeData) => {
      return data.name.toLocaleLowerCase().match(search.toLocaleLowerCase())
    })
  }

}
