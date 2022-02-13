import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { Department, Employee } from '../model/user.model';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, depts: Department[]): string {
    return depts?.find(x => x.id == value)?.name ?? '';
  }
  
}
