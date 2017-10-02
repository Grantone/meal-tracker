import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="form">
      <div class="form-fields">
        <label>By Calories:</label>
        <select (change)="onChangeCalories($event.target.value)" class="filter">
          <option value="all"  selected="selected">Show All</option>
          <option value="low">Meals with less than 300 calories</option>
          <option value="high">Meals with more than 300 calories</option>
        </select>
      </div>
    </div>
    <div *ngFor="let currentMeal of childMealList | calories:filterCalories">
      <h3 (click)="mealClicked(currentMeal)">
        {{ currentMeal.name }}
      </h3>
      <p> {{currentMeal.description}}</p>
      <p> {{currentMeal.calories}}</p>
      <!-- <div class="meal-item">
        <meal-display
          *ngIf="selectedMeal === currentMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>  -->
    </div>
    <edit-meal-details
      [childSelectedMeal]="selectedMeal" *ngIf="selectedMeal" (onUpdateTotalCalories)="updateCalorieCounter($event)">
    </edit-meal-details>

  `
})
export class MealListComponent {
  @Input() childMealList:Meal;

  @Output()

  public mealList: Meal[];
  public selectedMeal: Meal = null;
  public filterCalories: string = "all";
  public calorieCount: number = 0;

  mealClicked(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }

  onChangeCalories(selectCalories) {
    this.filterCalories = selectCalories;
  }
  updateCalorieCounter(newMealCalories: number): void {
    this.calorieCount = 0;
    for(var i = 0; i < this.mealList.length; i++) {
      if(this.mealList[i].name === "selectedMeal") {
        this.mealList[i].calories = newMealCalories;
      }
    }
  }
}
