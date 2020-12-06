import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Edition } from './edition.model';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings'

@Injectable({
  providedIn: 'root'
})
export class EditionService {
  editionUrl = AppSettings.API_ENDPOINT + 'edition';

  constructor(private http: HttpClient, private router:Router) {
  }

  saveEdition(edition) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    this.http.post(this.editionUrl, edition, options).subscribe(resp => {
      this.router.navigate(['/editions']);
    });
  }

  getAllEditions() : Observable<Edition[]> {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.get<Edition[]>(this.editionUrl, options);
  }
}
