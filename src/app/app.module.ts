import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { CandidateService } from './services/candidate.service';
import { CompanyService } from './services/company.service';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { SalaryService } from './services/salary.service';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CompaniesComponent,
    DepartmentsComponent,
    EmployeesComponent,
    SalariesComponent,
    // Add your other components here
  ],
  imports: [
    BrowserModule,
    HttpClient,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    // Add other imports here
  ],
  providers: [
    CandidateService,
    CompanyService,
    EmployeeService,
    DepartmentService,
    SalaryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
