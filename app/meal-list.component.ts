import { Component, Input } from '@angular/core';
import { Meal } from './meal.model'
@Component({
  selector: 'meals',
  template: `
  <h3>Meals of The Day!</h3>
  <div *ngFor="let currentMeal of childMeals">
    <p>{{currentMeal.name}}</p>
    <p>{{currentMeal.calories}}</p>
    <p>{{currentMeal.details}}</p>
  </div>
  `
})

export class MealListComponent {
  @Input() childMeals: Meal[];

}
