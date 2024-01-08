import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'about', component: AboutComponent },
];
