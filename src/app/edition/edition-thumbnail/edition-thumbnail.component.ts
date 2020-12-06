import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edition } from '../edition.model';

@Component({
  selector: 'app-edition-thumbnail',
  templateUrl: './edition-thumbnail.component.html',
  styleUrls: ['./edition-thumbnail.component.css']
})
export class EditionThumbnailComponent implements OnInit {
  @Input() edition:Edition

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* public goToEditionDetails() {
    this.router.navigate(['editions/'], {})
  } */

}
