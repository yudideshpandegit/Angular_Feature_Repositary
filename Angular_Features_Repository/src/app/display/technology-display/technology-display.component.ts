import { Component, OnInit } from '@angular/core';

import { trigger, sequence, state, animate, transition, style } from '@angular/animations';

import {MatTableDataSource} from '@angular/material/table'

import {DisplayService} from '../display.service';

import {Idata} from '../../shared/reference.model';

@Component({
  selector: 'app-technology-display',
  templateUrl: './technology-display.component.html',
  styleUrls: ['./technology-display.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TechnologyDisplayComponent implements OnInit {


  dataSource;

  numberCurrency = 12343212345;


  tempDataSource: Idata[] =  [
    {
        "name": "max",
        "technology": "max",
        "typeOfVehicles": "max",
        "typeOfHouse": "max",
        "brand": "max",
        "typeOfService": "max",
        "description": "max",
        "startDate": "max",
        "dateOfPost": "max",
        "contact": "max",
        "address": "max",
        "email":"max",
        "comments": "max",
        "fileToUpload": "max"
    },
    
    {
        "name": "max",
        "technology": "max1",
        "typeOfVehicles": "max",
        "typeOfHouse": "max",
        "brand": "max2",
        "typeOfService": "max3",
        "description": "max",
        "startDate": "max",
        "dateOfPost": "max",
        "contact": "max",
        "address": "max",
        "email":"max",
        "comments": "max",
        "fileToUpload": "max"
    }];

  columnsToDisplay = ['name', 'typeOfService', 'technology', 'brand'];

  constructor(private display:DisplayService) { }

  ngOnInit() {


    this.createTechnologyTable();



  
  

  }





  createTechnologyTable(){

    this.display.getTechnology().subscribe((res) =>{

      console.log(res);

      // let data2 = res.body;

      // let dataSourceArr2;

      // let dataSourceArr = data2.objectJson.map((data) => {

      //   dataSourceArr2.push(data);

      // })

      // console.log(dataSourceArr2);
      // this.dataSource = new MatTableDataSource<Idata>(dataSourceArr2);

      // console.log(this.dataSource);

    })


  }

}
