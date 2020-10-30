import { Component, OnInit } from '@angular/core';
import { Tasting } from 'src/app/tastings';
import { AuthService } from '../../users/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string="";
  foundTastings: Tasting[];

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  searchEdition(searchTerm) {

  }

}
