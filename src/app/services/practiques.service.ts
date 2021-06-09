import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { truncate } from 'fs';
import { BehaviorSubject, Observable } from 'rxjs';
import { Practiques } from '../models/practiques';
import { take } from 'rxjs/operators';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PractiquesService {

  private _practiques: BehaviorSubject<Practiques[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get practiques(): Observable<Practiques[]> {
    return this._practiques.asObservable();
  }

  retrivePractiquesFromHttp() {
    let size = 0;
    this.practiques.pipe(take(1)).subscribe(
      (onePractica: Practiques[]) => {
        size = onePractica.length;
      }
    );

    //this.http.get("'http://localhost/daw/sintesis/'").subscribe(
    //this.http.get("http://localhost/daw/ci-demo/news").subscribe(
    this.http.get("http://localhost/daw/sintesis/api_segura/login").subscribe(
      (response: any[]) => {
        if(response.length == size){
          return;
        }else {
          this._practiques.next([]);
        }

        response.forEach((element) => {
          let practiques: Practiques = new Practiques();
          practiques.id = element.id;
          practiques.titul = element.titul;
          practiques.profecreado = element.profecreado;
          practiques.descripcio = element.descripcio;
          practiques.explicacio = element.explicacio;
          practiques.categoria = element.categoria;
          practiques.materialpractiques = element.materialpractiques;
          practiques.tipusrecurs = element.tipusrecurs;
          practiques.datacreacio = element.datacreacio;

          this.practiques.pipe(take(1)).subscribe(
            (onePractica: Practiques[]) => {
            this._practiques.next(onePractica.concat(practiques));
            }
          );
        }
        
        );
      }
    );

  }
}


