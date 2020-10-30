import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { Edition } from '../edition.model';
import { EditionService } from '../edition.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-edition',
  templateUrl: './create-edition.component.html',
  styleUrls: ['./create-edition.component.css']
})
export class CreateEditionComponent implements OnInit {
  barrelForm: FormGroup;
  barrels: FormArray;
  public newEdition : Edition = {
    brand: '',
    name: '',
    age: null,
    yearBottled: null,
    barrels: [],
    createdAt: new Date,
    createdBy: 1//this.auth.currentUser.id
  };

  /* public barrels: any[] = [{
    id: 1,
    name: ''
  }]; */

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router, private editionService:EditionService) { }

  ngOnInit() {
    this.barrelForm = this.formBuilder.group({
      barrels: this.formBuilder.array([ this.createBarrel() ])
    });
  }

  createBarrel(): FormGroup {
    return this.formBuilder.group({
      name: ''
    });
  }

  addBarrel(): void {
    this.barrels = this.barrelForm.get('barrels') as FormArray;
    this.barrels.push(this.createBarrel());
    console.log(this.barrels);
  }

  removeBarrel() {

  }

  saveEdition(formValues) {
    this.editionService.saveEdition(formValues);
    this.router.navigate(['/editions']);
  }

  cancel() {
    this.router.navigate(['/'])
  }

}
