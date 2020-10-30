import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "David";
  password = "1234";

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }


  /* login2(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    .subscribe(resp => {
      if(!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['/']);
      }
    })
  this.router.navigate(['/']);
  console.log(this.authService.currentUser);
  } */

  cancel() {
    this.router.navigate(['/'])
  }

}
