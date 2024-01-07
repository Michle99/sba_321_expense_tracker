import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenses: any[] = [];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: any) {
    this.expenses.push(expense);
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  constructor() { }
}
