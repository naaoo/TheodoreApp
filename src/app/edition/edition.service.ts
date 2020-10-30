import { Injectable } from '@angular/core';
import { Edition } from './edition.model';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor() { }

  saveEdition(formValues) {
    let newEdition = new Edition();
    newEdition.brand = formValues.brand;
    newEdition.name = formValues.name;
    newEdition.age = formValues.age;
    newEdition.yearBottled = formValues.yearBottled;
    newEdition.createdAt = new Date();
    newEdition.createdBy = null;

    console.log(newEdition);
  }
}
