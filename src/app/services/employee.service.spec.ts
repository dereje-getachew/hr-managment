import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get employees', () => {
    service.getEmployees().subscribe(employees => {
      expect(employees).toBeTruthy();
      expect(employees.length).toBeGreaterThan(0);
    });
  });

  it('should get an employee by id', () => {
    const id = 1;
    service.getEmployeeById(id).subscribe(employee => {
      expect(employee).toBeTruthy();
      expect(employee.id).toBe(id);
    });
  });

  it('should add an employee', () => {
    const newEmployee: Employee = { id: 3, name: 'New Employee', email: 'new@example.com', phone: '123456789', departmentId: 1, salaryId: 1, joinDate: '2023-01-01' };
    service.addEmployee(newEmployee).subscribe(employee => {
      expect(employee).toBeTruthy();
      expect(employee.name).toBe('New Employee');
    });
  });

  it('should update an employee', () => {
    const updatedEmployee: Employee = { id: 1, name: 'Updated Employee', email: 'updated@example.com', phone: '987654321', departmentId: 2, salaryId: 2, joinDate: '2023-01-01' };
    service.updateEmployee(updatedEmployee).subscribe(employee => {
      expect(employee).toBeTruthy();
      expect(employee.name).toBe('Updated Employee');
    });
  });

  it('should delete an employee', () => {
    const id = 1;
    service.deleteEmployee(id).subscribe(response => {
      expect(response).toBeUndefined();
    });
  });
});
