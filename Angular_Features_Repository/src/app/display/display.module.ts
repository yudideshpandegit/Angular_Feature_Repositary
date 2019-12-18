import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DemoMaterialModule} from '../material-shared.module';

import {RouterModule} from '@angular/router';

import {DisplayRoutingModule} from './display-routing.module';

import { TechnologyDisplayComponent } from './technology-display/technology-display.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { HouseDisplayComponent } from './house-display/house-display.component';


@NgModule({
  declarations: [TechnologyDisplayComponent, VehicleDisplayComponent, HouseDisplayComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    RouterModule,
    DemoMaterialModule
  ],
  exports:[
    TechnologyDisplayComponent,
    VehicleDisplayComponent,
    HouseDisplayComponent
  ]
})
export class DisplayModule { }
