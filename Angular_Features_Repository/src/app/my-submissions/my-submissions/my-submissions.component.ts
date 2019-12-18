import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.component.html',
  styleUrls: ['./my-submissions.component.css']
})
export class MySubmissionsComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort:MatPaginator;

  constructor(private http: Http) { }

  ngOnInit() {

    
    // this.material.getJsonObject().subscribe((data) => console.log(data));

     this.http.get("assets/sample.json").
     pipe(map((response) => response.json())).
     subscribe((data) => {

      this.dataSource = new MatTableDataSource(data.objectJson); 

      
      console.log(this.dataSource);

      this.dataSource.paginator = this.paginator;

      this.dataSource.sort = this.sort;


     });

 

  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
