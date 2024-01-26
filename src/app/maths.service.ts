import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService 
{
  public calculateSquare(no:number):number
  {
    return no*no;
  }
  constructor() { }
}
