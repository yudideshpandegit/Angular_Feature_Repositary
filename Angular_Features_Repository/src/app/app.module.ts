import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {DemoMaterialModule} from './material-shared.module';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MySubmissionsModule} from './my-submissions/my-submissions.module';

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetsModule } from './assets/assets.module';

import { MaterialTablesComponent } from './material-tables/material-tables.component';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { DisplayModule } from './display/display.module';


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    MaterialTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssetsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpModule,
    MySubmissionsModule,
    HomeModule,
    CoreModule,
    DisplayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
