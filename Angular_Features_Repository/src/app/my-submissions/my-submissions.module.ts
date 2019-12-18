import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DemoMaterialModule} from '../material-shared.module';

import { HttpModule } from '@angular/http';



import {MySubmissionsComponent} from './my-submissions/my-submissions.component';



@NgModule({
  declarations: [
    MySubmissionsComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    HttpModule
  ],
  exports:[
    MySubmissionsComponent
  ]
})
export class MySubmissionsModule { }
