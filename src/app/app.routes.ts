import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
     
    // make it 404
    { path: '**', redirectTo: 'employees', pathMatch: 'full' } // Wildcard маршрут
];
