import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'display', loadChildren: './display/display.module#DisplayModule'},
  {path:'home', loadChildren: './home/home.module#HomeModule'},
  {path:'post', loadChildren: './assets/assets.module#AssetsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }