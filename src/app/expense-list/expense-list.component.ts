import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit {

  expenses: any[] = [];
  
  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses();
  }

  deleteExpense(index: number) {
    this.expenseService.deleteExpense(index);
  }
}
