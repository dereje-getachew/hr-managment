import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { CandidateService } from './services/candidate.service';
import { CompanyService } from './services/company.service';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { SalaryService } from './services/salary.service';

@NgModule({
  declarations: [
    AppComponent,
    // Add your other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
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
