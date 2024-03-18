import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  viewEmployeeDetails(id: number): void {
    this.router.navigate(['/employee', id]);
  }

  editEmployee(id: number): void {
    this.router.navigate(['/employee', id, 'edit']);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees(); // Refresh the employee list
  }
}
