import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/auth.service';
import { Edition } from '../edition.model';
import { EditionService } from '../edition.service';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function validateAge(c: AbstractControl): { [ key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0)){
      return { 'age': true}
  }
  return null;
}

function validateYear(c: AbstractControl): { [ key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0 || c.value > 9999)){
      return { 'year': true}
  }
  return null;
}

@Component({
  selector: 'app-create-edition',
  templateUrl: './create-edition.component.html',
  styleUrls: ['./create-edition.component.css']
})
export class CreateEditionComponent implements OnInit {
  editionForm: FormGroup;
  edition = new Edition();

  constructor(public authService:AuthService, private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.editionForm = this.formBuilder.group({
      id: null,
      brand: ['', Validators.required],
      name: ['', Validators.required],
      age: [null, validateAge],
      yearBottled: [null, validateYear],
      barrels: [['']],
      createdAt: new Date,
      createdBy: 1,
    })
  }

  save() {
    console.log(this.editionForm);
    console.log('Saved: ' + JSON.stringify(this.editionForm.value));
  }
}














/* export class CreateEditionComponent implements OnInit {
  editionForm: FormGroup;
  barrelArray: FormArray;
  barrelGroup: FormGroup;

  get barrels(): FormArray{
    return <FormArray>this.editionForm.get('barrels');
  }

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
  }];

  constructor(private formBuilder:FormBuilder, private auth:AuthService, private router:Router, private editionService:EditionService) { }

  ngOnInit() {
    this.editionForm = this.formBuilder.group({
      id : null,
      brand: '',
      name: '',
      age: null,
      yearBottled: null,
      barrels : new FormGroup({
        barrelName: new FormControl()
      }),
      createdAt: Date,
      createdBy: null
    })


    this.barrelForm = this.formBuilder.group({
      barrels: this.formBuilder.array([ this.createBarrels() ])
    });
  }

  createBarrels(): FormGroup {
    return this.formBuilder.group({
      name: ''
    });
  }

  addBarrel(): void {
    this.barrels.push(this.createBarrels());
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

} */
