import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/auth.service';
import { Edition } from '../edition.model';
import { EditionService } from '../edition.service';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

function validateAge(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0)){
      return {'age': true}
  }
  return null;
}

function validateYear(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0 || c.value > 9999)){
      return {'year': true}
  }
  return null;
}

function validateVol(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0 || c.value > 100)){
      return {'vol': true}
  }
  return null;
}

export function oneOfControlRequired(...controls: AbstractControl[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      for (const aControl of controls) {
        if (!Validators.required(aControl)) {
          return null;
        }
      }
      return { oneOfRequired: true };
   };
}

@Component({
  selector: 'app-create-edition',
  templateUrl: './create-edition.component.html',
  styleUrls: ['./create-edition.component.css']
})
export class CreateEditionComponent implements OnInit {
  editionForm: FormGroup;
  edition = new Edition();
  get barrels():FormArray {
    return <FormArray>this.editionForm.get('barrels');
  }

  constructor(public authService:AuthService, private formBuilder:FormBuilder,
    private editionService:EditionService) {

  }

  ngOnInit() {
    this.editionForm = this.formBuilder.group({
      id: null,
      brand: ['', Validators.required],
      name: '',
      age: [null, validateAge],
      vol: [null, validateVol],
      yearBottled: [null, validateYear],
      barrels: this.formBuilder.array([this.buildBarrel()]),
      createdAt: new Date,
      createdBy: this.authService.currentUser.id
    });
    this.editionForm.setValidators([
      oneOfControlRequired(
        this.editionForm.get('name'),
        this.editionForm.get('age')
      )
    ]);
  }

  addBarrel(): void {
    this.barrels.push(this.buildBarrel());
  }

  buildBarrel(): FormGroup {
    return this.formBuilder.group({
      barrel: ['']
    })
  }

  /* lastBarrelFilled(): Boolean {
      if (this.barrels[this.barrels.length - 1].value !== 'undefined') {
        return true;
      }

    return false;
  } */

  save() {
    this.editionService.saveEdition(this.editionForm.value);
  }
}
