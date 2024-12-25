import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'create-employee', component: CreateEmployeeComponent },
    

    // default redirects
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'index', redirectTo: 'employees', pathMatch: 'full' },
     
    // make it 404
    { path: '**', redirectTo: 'employees', pathMatch: 'full' } // Wildcard маршрут
];
