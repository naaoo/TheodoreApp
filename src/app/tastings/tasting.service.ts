import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings';
import { Edition } from '../edition';
import { Tasting } from './tasting.model';

@Injectable({
  providedIn: 'root'
})
export class TastingService {
  tastingUrl = AppSettings.API_ENDPOINT + 'tasting';

  constructor(private http: HttpClient, private router:Router) { }

  public saveTasting(tForm, edition) : void {
    const tasting = this.convertToTrueTasting(tForm, edition);
    console.log(tasting);
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    this.http.post(this.tastingUrl, tasting, options).subscribe(resp => {
      this.router.navigate(['/editions/' + tasting.editionId]);
    });
  }

  public getTastings() {

  }

  private convertToTrueTasting(tForm, edition: Edition) : Tasting {
    var tasting = new Tasting();
    tasting.id = null;
    tasting.date = new Date(tForm.date);
    tasting.editionId = edition.id;
    tasting.author = tForm.author;
    tasting.nose = this.convertToStringArray(tForm.noses);
    tasting.taste = this.convertToStringArray(tForm.tastes);
    tasting.sweet = tForm.sweet;
    tasting.spice = tForm.spice;
    tasting.smoke = tForm.smoke;
    tasting.sherry = tForm.sherry;
    tasting.wood = tForm.wood;
    tasting.alcohol = tForm.alcohol;
    tasting.round = tForm.round;
    tasting.finish = tForm.finish;
    tasting.comment = tForm.comment;
    return tasting;
  }

  private convertToStringArray(oArray) : string [] {
    var sArray = new Array<string>();
    oArray.forEach(element => {
      if (element.e !== "") {
        sArray.push(element.e);
      }
    });
    return sArray;
  }
}
