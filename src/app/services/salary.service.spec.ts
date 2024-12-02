import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SalaryService } from './salary.service';

describe('SalaryService', () => {
  let service: SalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(SalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get salaries', () => {
    service.getSalaries().subscribe(salaries => {
      expect(salaries).toBeTruthy();
      expect(salaries.length).toBeGreaterThan(0);
    });
  });

  it('should get a salary by id', () => {
    const id = 1;
    service.getSalaryById(id).subscribe(salary => {
      expect(salary).toBeTruthy();
      expect(salary.id).toBe(id);
    });
  });

  it('should add a salary', () => {
    const newSalary = { id: 3, employeeId: 1, basic: 50000, bonus: 5000, deductions: 2000 };
    service.addSalary(newSalary).subscribe(salary => {
      expect(salary).toBeTruthy();
      expect(salary.basic).toBe(50000);
    });
  });

  it('should update a salary', () => {
    const updatedSalary = { id: 1, employeeId: 1, basic: 55000, bonus: 6000, deductions: 2500 };
    service.updateSalary(updatedSalary).subscribe(salary => {
      expect(salary).toBeTruthy();
      expect(salary.basic).toBe(55000);
    });
  });

  it('should delete a salary', () => {
    const id = 1;
    service.deleteSalary(id).subscribe(response => {
      expect(response).toBeUndefined();
    });
  });
});
