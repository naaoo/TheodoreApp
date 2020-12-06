import { Component, OnInit } from '@angular/core';
import { Edition } from '../edition.model';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-edition-list',
  templateUrl: './edition-list.component.html',
  styleUrls: ['./edition-list.component.css']
})
export class EditionListComponent implements OnInit {
  editions: Edition[];

  constructor(private editionService: EditionService) { }

  ngOnInit() {
    this.editionService.getAllEditions().subscribe(eds => {
      this.editions = eds as Edition[]
    });
  }
}
