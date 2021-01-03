import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from 'src/app/users/auth.service';
import { Tasting } from '../tasting.model';
import { TastingService } from '../tasting.service';
import { DatePipe } from '@angular/common'
import { Edition } from 'src/app/edition';
import { EditionService } from 'src/app/edition/edition.service';
import { ActivatedRoute } from '@angular/router';

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
  edition = new Edition();
  tasting = new Tasting();
  today = this.getTodayString();
  get noses():FormArray {
    return <FormArray>this.tastingForm.get('noses');
  }
  get tastes():FormArray {
    return <FormArray>this.tastingForm.get('tastes');
  }

  constructor(private route:ActivatedRoute, private editionService:EditionService, public authService:AuthService, private formBuilder:FormBuilder, private tastingService:TastingService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.editionService.getAllEditions().subscribe(eds => {
        const edArr = eds as Edition[];
        this.edition = edArr.find( ed => ed.id === parseInt(params['id']));
      })
    }),
    this.tastingForm = this.formBuilder.group({
      id: null,
      author: this.authService.currentUser.id,
      date: this.getTodayString(),
      noses: this.formBuilder.array([]),
      tastes: this.formBuilder.array([]),
      sweet: [0, validateRating],
      spice: [0, validateRating],
      smoke: [0, validateRating],
      sherry: [0, validateRating],
      wood: [0, validateRating],
      alcohol: [0, validateRating],
      round: [0, validateRating],
      finish: [0, validateRating],
      comment: '',
    });
    for (let i = 0; i < 5; i++) {
      this.addNose();
      this.addTaste();
    }
  }

  getTodayString(): string {
    const today = new Date();
    const t = today.toLocaleDateString('en-CA');
    return today.toLocaleDateString('en-CA');
  }

  buildNose() {
    return this.formBuilder.group({
      e: new FormControl('')
    })
  }

  addNose() {
    this.noses.push(this.buildNose());
  }

  buildTaste() {
    return this.formBuilder.group({
      e: ['']
    })
  }

  addTaste() {
    this.tastes.push(this.buildTaste());
  }

  save() {
    this.tastingService.saveTasting(this.tastingForm.value, this.edition);
  }
}
