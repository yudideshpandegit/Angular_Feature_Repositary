import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import {MaterialtableService} from "../materialtable.service";

// import * as namesData from './names.json';


import 'jspdf';
import * as jsPDF from 'jspdf'

var jsPDF = require('jspdf');
require('jspdf-autotable');


@Component({
  selector: 'app-material-tables',
  templateUrl: './material-tables.component.html',
  styleUrls: ['./material-tables.component.css']
})
export class MaterialTablesComponent implements OnInit {

  constructor(private http: Http, private material:MaterialtableService) { }
  
  ngOnInit() {

    // this.material.getJsonObject().subscribe((data) => console.log(data));

    //  this.http.get("assets/sample.json").
    //  pipe(map((response) => response.json())).
    //  subscribe((data) => console.log(data))


    //  console.log(namesData.default);

  }

  

  downloadToPdf(){

  
    var item = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
    };
    var doc = new jsPDF();

    let head = [
      [
           {content: ' ', colSpan: 5, styles: {halign: 'center', fillColor: [22, 160, 133]}},
          {content: 'People', colSpan: 5, styles: {halign: 'center', fillColor: [22, 160, 133]}}, 
          {content: 'Data', colSpan: 9, styles: {halign: 'center', fillColor: [22, 160, 133]}}
      ],
      ["Details", "Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values"]
  ];

    var col = ["Details", "Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values","Values", "Values"];
    var rows = [[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],

    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],

    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],

    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9],
    ];
    // for(var key in item){
    //     var temp = [key, item[key]];
    //     rows.push(temp);
    // }

    // doc.autoTable(col, rows);

    doc.autoTable({
      // startY: 60,
      head: head,
      body: rows,
      // theme: 'grid',
      headerStyles: {
        lineWidth: 1,
        lineColor: [255,255,255]
    }
  });

    doc.save('Test.pdf');


  }




}
