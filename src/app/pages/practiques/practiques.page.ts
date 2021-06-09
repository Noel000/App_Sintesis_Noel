import { Component, OnInit } from '@angular/core';
import { Practiques } from 'src/app/models/practiques';
import { PractiquesService } from 'src/app/services/practiques.service';

@Component({
  selector: 'app-practiques',
  templateUrl: './practiques.page.html',
  styleUrls: ['./practiques.page.scss'],
})
export class PractiquesPage implements OnInit {

  public practiques: Practiques[] = [];

  constructor(private practiquesService: PractiquesService) {
    this.practiquesService.retrivePractiquesFromHttp();
    this.practiquesService.practiques.subscribe(
      (onePractica: Practiques[]) => {
        this.practiques = onePractica;
      }
    );
   }

  ngOnInit() {
  }

}
