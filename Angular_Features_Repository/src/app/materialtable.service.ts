import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialtableService {

  private _jsonURL = "./names.json";

  constructor(private http:Http) { }

  getJsonObject(){

    return this.http.get("src/app/data-files/sample.json").
    pipe(map((response) => response.json()))

  }


}
