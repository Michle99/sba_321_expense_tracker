import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})

export class ExpenseFormComponent {

  expense: any = {};

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    this.expenseService.addExpense(this.expense);
    this.expense = {};
  }
}
