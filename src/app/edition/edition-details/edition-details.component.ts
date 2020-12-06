import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edition } from '../edition.model';
import { EditionService } from '../edition.service';

@Component({
  selector: 'app-edition-details',
  templateUrl: './edition-details.component.html',
  styleUrls: ['./edition-details.component.css']
})
export class EditionDetailsComponent implements OnInit {
  edition = new Edition();

  constructor(private route:ActivatedRoute, private editionService:EditionService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.editionService.getAllEditions().subscribe(eds => {
        const edArr = eds as Edition[];
        this.edition = edArr.find( ed => ed.id === parseInt(params['id']));
      })
    })
  }


}
