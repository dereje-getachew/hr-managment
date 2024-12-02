import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Candidate } from './models/candidate.model';
import { Company } from './models/company.model';
import { Employee } from './models/employee.model';
import { Department } from './models/department.model';
import { Salary } from './models/salary.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates: Candidate[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123456789', appliedPosition: 'Developer', experienceYears: 5 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987654321', appliedPosition: 'Designer', experienceYears: 3 },
    ];

    const companies: Company[] = [
      { id: 1, name: 'Tech Corp', location: 'New York', industryType: 'IT', size: 500 },
      { id: 2, name: 'Design Studio', location: 'San Francisco', industryType: 'Design', size: 150 },
    ];

    const employees: Employee[] = [
      { id: 1, name: 'Alice Brown', email: 'alice@example.com', phone: '111222333', departmentId: 1, salaryId: 1, joinDate: '2022-01-10' },
      { id: 2, name: 'Bob Green', email: 'bob@example.com', phone: '444555666', departmentId: 2, salaryId: 2, joinDate: '2023-05-15' },
    ];

    const departments: Department[] = [
      { id: 1, name: 'Development', manager: 'Tom Johnson' },
      { id: 2, name: 'Design', manager: 'Sarah Connor' },
    ];

    const salaries: Salary[] = [
      { id: 1, employeeId: 1, basic: 6000, bonus: 500, deductions: 200 },
      { id: 2, employeeId: 2, basic: 5000, bonus: 300, deductions: 100 },
    ];

    return { candidates, companies, employees, departments, salaries };
  }
}
