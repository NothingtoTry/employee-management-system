import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee = {
    EmployeeId: 0,
    EmployeeNumber: '',
    FirstName: '',
    LastName: '',
    Birthday:  new Date(),
    Gender: '',
    Picture: ''
  };
  errorMessage: string = '';

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // Additional initialization if needed
  }

  addEmployee(): void {
    // Implement validation here
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['/employees']);
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
