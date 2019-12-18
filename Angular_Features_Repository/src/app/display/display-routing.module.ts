import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TechnologyDisplayComponent } from './technology-display/technology-display.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { HouseDisplayComponent } from './house-display/house-display.component';

const route:Routes = [
      {path: 'technology-display',component: TechnologyDisplayComponent},
      {path: 'vehicle-display',component: VehicleDisplayComponent},
      {path: 'house-display',component: HouseDisplayComponent},
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class DisplayRoutingModule { }
