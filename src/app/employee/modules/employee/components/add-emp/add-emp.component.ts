// import { Component } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// // import{FormGroup,FormControl,Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-add-emp',
//   standalone: false,
//   templateUrl: './add-emp.component.html',
//   styleUrl: './add-emp.component.scss'
// })
// export class AddEmpComponent {
//
//
//   employee = {
//     fName: '',
//     lName: '',
//     mName: '',
//     gender: '',
//     email: '',
//     mobileNo: '',
//     empType: '',
//     dob: '',
//     doj: ''
//   };
//
//   private apiUrl = 'http://localhost:8080/emp/createEmp'; // Your Java API endpoint
//
//   constructor(private http: HttpClient) {}
//
//   onSubmit() {
//     this.http.post(this.apiUrl, this.employee).subscribe({
//       next: (response) => {
//         console.log('Employee added successfully:', response);
//         alert('Employee added successfully!');
//       },
//       error: (error) => {
//         console.error('Error adding employee:', error);
//         alert('Failed to add employee.');
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.scss',
  imports: [
    ReactiveFormsModule,
  ]
})
export class  AddEmpComponent implements OnInit {


  employeeForm!: FormGroup; // Reactive Form Group
  private apiUrl = 'http://localhost:8080/emp/createEmp'; // Your API endpoint

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      mName: [''], // Optional field
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Validates mobile number
      empType: ['', Validators.required],
      dob: ['', Validators.required], // Can use Date validators if needed
      doj: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.http.post(this.apiUrl, this.employeeForm.value).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
          alert('Employee added successfully!');
          this.employeeForm.reset(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          alert('Failed to add employee. Please try again.');
        }
      });
    } else {
      alert('Form is invalid. Please check all required fields.');
    }
  }
}
