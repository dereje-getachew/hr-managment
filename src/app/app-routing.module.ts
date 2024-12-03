
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SalariesComponent } from './components/salaries/salaries.component';

const routes: Routes = [
  { path: 'candidates', component: CandidatesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'salaries', component: SalariesComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}