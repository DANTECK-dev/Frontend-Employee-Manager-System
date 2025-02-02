import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'create-employee', component: CreateEmployeeComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent },
    { path: 'employee-details/:id', component: EmployeeDetailsComponent },
    

    // default redirects
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'index', redirectTo: 'employees', pathMatch: 'full' },
     
    // make it 404
    { path: '**', redirectTo: 'employees', pathMatch: 'full' } // Wildcard маршрут
];
