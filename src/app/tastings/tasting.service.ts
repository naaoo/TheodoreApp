import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TastingService {

  constructor() { }

  public saveTasting(tasting) : void {
    console.log(tasting);
  }
}
