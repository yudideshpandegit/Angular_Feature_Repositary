import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http'

import {Idata} from '../shared/reference.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:Http) { }

  getTechnology(){

    return this.http.get("http://localhost:3000/technology");

  }

}
