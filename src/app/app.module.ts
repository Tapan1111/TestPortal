import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { EmployeeListpageComponent } from './components/employee-listpage/employee-listpage.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { OnlyemployeeComponent } from './components/onlyemployee/onlyemployee.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { MatTableModule } from '@angular/material/table';
import { AddproductpageComponent } from './components/addproductpage/addproductpage.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    HomeComponent,
    DashboardComponent,
    EmployeeListpageComponent,
    EditpageComponent,
    OnlyemployeeComponent,
    LogoutComponent,
    ProductpageComponent,
    AddproductpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
