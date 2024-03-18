import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      EmployeeId: 1,
      EmployeeNumber: 'EMP001',
      FirstName: 'John',
      LastName: 'Doe',
      Birthday: new Date(1990, 5, 15),
      Gender: 'Male',
      Picture: 'https://example.com/john_doe.jpg'
    },
    {
      EmployeeId: 2,
      EmployeeNumber: 'EMP002',
      FirstName: 'Jane',
      LastName: 'Smith',
      Birthday: new Date(1985, 10, 25),
      Gender: 'Female',
      Picture: 'https://example.com/jane_smith.jpg'
    }
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined { // Update the return type
    return this.employees.find(employee => employee.EmployeeId === id);
  }

  addEmployee(newEmployee: Employee): void {
    // Assign a new EmployeeId based on the length of the array + 1
    newEmployee.EmployeeId = this.employees.length + 1;
    this.employees.push(newEmployee);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(employee => employee.EmployeeId === updatedEmployee.EmployeeId);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(employee => employee.EmployeeId !== id);
  }
}
