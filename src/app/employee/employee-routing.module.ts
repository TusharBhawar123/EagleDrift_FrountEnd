import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmpComponent} from './modules/employee/components/add-emp/add-emp.component';
import {ListEmpComponent} from './modules/employee/components/list-emp/list-emp.component';
import {DetailsEmpComponent} from './modules/employee/components/details-emp/details-emp.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee/list', pathMatch: 'full' },
  { path: 'add', component: AddEmpComponent },
  { path: 'list', component: ListEmpComponent },
  { path: 'details/:id', component: DetailsEmpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class EmployeeRoutingModule { }
