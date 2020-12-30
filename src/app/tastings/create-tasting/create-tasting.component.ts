import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/users/auth.service';
import { Tasting } from '../tasting.model';
import { TastingService } from '../tasting.service';
import { DatePipe } from '@angular/common'

function validateRating(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 0 || c.value > 10)){
      return {'rating': true}
  }
  return null;
}

@Component({
  selector: 'app-create-tasting',
  templateUrl: './create-tasting.component.html',
  styleUrls: ['./create-tasting.component.css']
})
export class CreateTastingComponent implements OnInit {
  tastingForm: FormGroup;
  tasting = new Tasting();
  today = this.getTodayString();
  get nose():FormArray {
    return <FormArray>this.tastingForm.get('nose');
  }
  get taste():FormArray {
    return <FormArray>this.tastingForm.get('taste');
  }

  constructor(public authService:AuthService, private formBuilder:FormBuilder, private tastingService:TastingService) {
    this.tastingForm = this.formBuilder.group({
      id: null,
      author: this.authService.currentUser.id,
      date: null,
      nose: this.formBuilder.array([this.buildNose, this.buildNose, this.buildNose, this.buildNose, this.buildNose]),
      taste: this.formBuilder.array([this.buildTaste, this.buildTaste, this.buildTaste, this.buildTaste, this.buildTaste]),
      sweet: [null, validateRating],
      spice: [null, validateRating],
      smoke: [null, validateRating],
      sherry: [null, validateRating],
      wood: [null, validateRating],
      alcohol: [null, validateRating],
      round: [null, validateRating],
      finish: [null, validateRating],
      comment: '',
    });
  }

  ngOnInit() {

  }

  getTodayString(): string {
    const today = new Date();
    return today.toLocaleDateString('en-CA');
  }

  buildNose(): FormGroup {
    return this.formBuilder.group({
      n: ['']
    })
  }

  buildTaste(): FormGroup {
    return this.formBuilder.group({
      t: ['']
    })
  }

  save() {
    this.tastingService.saveTasting(this.tastingForm.value);
  }

}
