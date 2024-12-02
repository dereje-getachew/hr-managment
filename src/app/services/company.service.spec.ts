import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(CompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a company by id', () => {
    const id = 1;
    service.getCompanyById(id).subscribe(company => {
      expect(company).toBeTruthy();
      expect(company.id).toBe(id);
    });
  });

  it('should add a company', () => {
    const newCompany = { id: 3, name: 'New Company', location: 'Boston', industryType: 'Finance', size: 200 };
    service.addCompany(newCompany).subscribe(company => {
      expect(company).toBeTruthy();
      expect(company.name).toBe('New Company');
    });
  });

  it('should update a company', () => {
    const updatedCompany = { id: 1, name: 'Updated Company', location: 'New York', industryType: 'IT', size: 600 };
    service.updateCompany(updatedCompany).subscribe(company => {
      expect(company).toBeTruthy();
      expect(company.name).toBe('Updated Company');
    });
  });

  it('should delete a company', () => {
    const id = 1;
    service.deleteCompany(id).subscribe(response => {
      expect(response).toBeUndefined();
    });
  });
});
