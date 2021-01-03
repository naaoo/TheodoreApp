import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = AppSettings.API_ENDPOINT + 'user';
  currentUser: User;
  loginInvalid = false;
  isAuthenticated = false;

  constructor(private http:HttpClient, private router:Router) {
    //TODO: delete following line
    this.loginUser('David', '1234');
  }

  loginUser(enteredName:string, enteredPW:string) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    this.http.get(this.userUrl, options)
      .subscribe(resp => {
        if(!resp) {
          this.loginInvalid = true;
          this.router.navigate(['/']);
        } else {
          this.setCurrentUser(resp, enteredName, enteredPW);
          this.router.navigate(['/editions']);
        }
      });
  }

  logOutUser() {
    this.currentUser = undefined;
    this.loginInvalid = false;
    this.isAuthenticated = false;
  }

  setCurrentUser(usersJSON: any, enteredName:string, enteredPW:string) {
    usersJSON.forEach(user => {
      if (user.name === enteredName && user.password === enteredPW) {
        this.currentUser = user;
        this.loginInvalid = false;
        this.isAuthenticated = true;
      }
    });
  }
}
