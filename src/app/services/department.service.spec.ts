import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DepartmentService } from './department.service';

describe('DepartmentService', () => {
  let service: DepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(DepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get departments', () => {
    service.getDepartments().subscribe(departments => {
      expect(departments).toBeTruthy();
      expect(departments.length).toBeGreaterThan(0);
    });
  });

  it('should get a department by id', () => {
    const id = 1;
    service.getDepartmentById(id).subscribe(department => {
      expect(department).toBeTruthy();
      expect(department.id).toBe(id);
    });
  });

  it('should add a department', () => {
    const newDepartment = { id: 3, name: 'New Department', manager: 'John Doe' };
    service.addDepartment(newDepartment).subscribe(department => {
      expect(department).toBeTruthy();
      expect(department.name).toBe('New Department');
    });
  });

  it('should update a department', () => {
    const updatedDepartment = { id: 1, name: 'Updated Department', manager: 'Jane Smith' };
    service.updateDepartment(updatedDepartment).subscribe(department => {
      expect(department).toBeTruthy();
      expect(department.name).toBe('Updated Department');
    });
  });

  it('should delete a department', () => {
    const id = 1;
    service.deleteDepartment(id).subscribe(response => {
      expect(response).toBeUndefined();
    });
  });
});
