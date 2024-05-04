import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'addproduct', component: AddproductComponent },
    { path: 'viewproduct', component: ViewproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
