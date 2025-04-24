import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmpComponent } from './modules/employee/components/add-emp/add-emp.component';
import { ListEmpComponent } from './modules/employee/components/list-emp/list-emp.component';
import { DetailsEmpComponent } from './modules/employee/components/details-emp/details-emp.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ListEmpComponent,
    DetailsEmpComponent
  ],
  providers: [
    HttpClient
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    AddEmpComponent,
    HttpClientModule
  ],
  exports: [
    ListEmpComponent,
    DetailsEmpComponent,
    HttpClientModule
  ]
})
export class EmployeeModule { }
