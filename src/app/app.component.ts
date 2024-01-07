import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ExpenseFormComponent, 
    ExpenseListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sba_321_expense_tracker';
}
