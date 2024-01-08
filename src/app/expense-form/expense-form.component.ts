import { Component, ViewEncapsulation } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ FormsModule, CommonModule, HighlightDirective],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})

export class ExpenseFormComponent {

  expense: any = {
    description: '',
    amount: null,
  };

  isFormValid: boolean = false;

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    this.expenseService.addExpense({ ...this.expense });
    this.expense = {
      description: '',
      amount: null,
    };
  }

  validateForm() {
    this.isFormValid = this.expense.description && this.expense.amount !== null;
  }

}
