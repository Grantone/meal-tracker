import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <new-meal (onSubmitNewMeal)="createMeal($event)">
      </new-meal>
      <meal-list [childMealList]="meals">
      </meal-list>

    </div>
  `
})
export class AppComponent {
  public meals: Meal[]=[
      new Meal("Burger", "Ordered a salad on the side instead of chicken.", 375),
      new Meal("Minji", "Didn't order cow peas.", 275),
      new Meal("Appetiser", "Failes to take milk-shake.", 450),
  ];


  createMeal(newMealInfo:Meal) {
    this.meals.unshift(newMealInfo);
  }
}
