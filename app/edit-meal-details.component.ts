import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  template: `
    <div class="edit-form" *ngIf="childSelectedMeal">
      <h3>Edit Description:</h3>
      <label>Name</label>
      <input type="text" [(ngModel)]="childSelectedMeal.name">
      <label>Name</label>
      <input type="text" [(ngModel)]="childSelectedMeal.details">
      <label>Name</label>
      <input [(ngModel)]="childSelectedMeal.calories" type="number" #newCalories>
      <button (click)="updateTotalCalories(newCalories)">Update</button>
    </div>
  `
})
export class EditMealDetailsComponent {
  @Input() childSelectedMeal:Meal;
  @Output() onUpdateTotalCalories = new EventEmitter();

  updateTotalCalories(inputCalories: HTMLInputElement): void {
    var newMealCalories: number = parseInt(inputCalories.value);
    this.onUpdateTotalCalories.emit(newMealCalories);
  }
}
