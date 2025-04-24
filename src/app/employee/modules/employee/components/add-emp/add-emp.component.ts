import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './add-emp.component.scss'
})
export class AddEmpComponent {
  employee = {
    name: '',
    email: '',
    department: ''
  };

  private apiUrl = 'localhost:8080/emp/createEmp'; // Your Java API endpoint

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(this.apiUrl, this.employee).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
        alert('Employee added successfully!');
      },
      error: (error) => {
        console.error('Error adding employee:', error);
        alert('Failed to add employee.');
      }
    });
  }
}
