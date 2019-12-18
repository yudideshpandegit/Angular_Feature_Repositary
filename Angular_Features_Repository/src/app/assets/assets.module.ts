import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {DemoMaterialModule} from '../material-shared.module';

import {CreateAssetComponent} from './create-asset/create-asset.component';
import { AssetsRoutingModule } from './assets-routing.module';



@NgModule({
  declarations: [CreateAssetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    AssetsRoutingModule
  ],
  exports: [CreateAssetComponent]
})
export class AssetsModule { }
