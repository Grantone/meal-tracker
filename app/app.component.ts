import { Component } from 'angular/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Burger", "Ordered a salad on the side instead of chicken.", 375),
      new Meal("Minji", "Didn't order cow peas.", 275),
      new Meal("Appetiser", "Failes to take milk-shake.", 450)
    ];
  }
}
