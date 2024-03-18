import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      EmployeeId: 1, EmployeeNumber: 'EMP0001', FirstName: 'John', LastName: 'Wick', Birthday: new Date(1991, 15, 8), Gender: 'Male', Picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lionsgate.com%2Ffranchises%2Fjohn-wick&psig=AOvVaw2CCupa8NG-7afllUVcniDG&ust=1710865087164000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiBtKCb_oQDFQAAAAAdAAAAABAJ'
    },
    {
      EmployeeId: 2, EmployeeNumber: 'EMP002', FirstName: 'Dead', LastName: 'Pool', Birthday: new Date(1995, 13, 20), Gender: 'Male', Picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uiargonaut.com%2F2016%2F05%2F06%2Fbreaking-all-the-rules-the-first-deadpool-movie-is-what-comic-book-fans-deserve%2F&psig=AOvVaw2vs_IIvY7mf0HoNnKCSt-E&ust=1710865060804000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDo0JOb_oQDFQAAAAAdAAAAABAE'
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
