import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../model/user.model';

@Pipe({
  name: 'departments'
})
export class DepartmentsPipe implements PipeTransform {

  transform(value: number, depart: Department[]): string {
    return depart?.find(x => x.id == value)?.name ?? '';
  }
}
