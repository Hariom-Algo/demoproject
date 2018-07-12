import { Pipe, PipeTransform } from '@angular/core';
import { values }  from 'lodash';

@Pipe({name: 'values'})
/*
 * ValuesPipe - get the values from an object
 * 
 * Usage:
 *   object | values
 * Example:
 *   {{ {1:'one',2:'two'} | values }}
 *   transforms to: ['one','two'
*/
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
      return values(value)
    }
}
