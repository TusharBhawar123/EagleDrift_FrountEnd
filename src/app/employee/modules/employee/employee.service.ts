import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/emp/getEmps');
  }
  postEmployee(emp: any): Observable<any> {
    return this.http.post('http://localhost:8080/emp/createEmp', emp);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/emp/getEmpById/' + id);
  }
}
