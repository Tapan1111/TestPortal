import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListpageComponent } from './components/employee-listpage/employee-listpage.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { OnlyemployeeComponent } from './components/onlyemployee/onlyemployee.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { AddproductpageComponent } from './components/addproductpage/addproductpage.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch:'full'},
  { path:'login', component:LoginpageComponent, pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent, pathMatch:'full'},
  { path:'employeelist', component:EmployeeListpageComponent, pathMatch:'full'},
  { path:'editemployee/:id', component:EditpageComponent, pathMatch:'full'},
  { path:'onlyemployee', component:OnlyemployeeComponent, pathMatch:'full'},
  { path:'logout', component:LogoutComponent, pathMatch:'full'},
  { path:'product', component:ProductpageComponent, pathMatch:'full'},
  { path:'addproduct', component:AddproductpageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
