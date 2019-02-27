import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'msToMin'
})
export class MsToMinPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){

  }

  transform(value: any){
    let seconds = value/1000;
    let minutes = seconds/60;
    return Math.floor(minutes);
  }

}
