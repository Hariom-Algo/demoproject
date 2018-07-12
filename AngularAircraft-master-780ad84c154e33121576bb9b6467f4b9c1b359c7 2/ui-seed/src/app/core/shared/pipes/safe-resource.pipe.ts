import { Pipe, PipeTransform } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isString } from  'lodash';

@Pipe({ name: 'safe' })
export class SafeResourcePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    if (isString(url))
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    throw new Error('Requires a String as input');
  }
}
