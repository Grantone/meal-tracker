import { Component } from '@angular/core';
import { Meal } from './meal.model'
@Component({
  selector: 'meals',
  template: `
  <h3>Meals of The Day!</h3>
  <div *ngFor="let currentMeal of meals">
    <p>{{currentMeal}}</p>
  </div>
  `
})

export class MealListComponent {
  meals:Meal[]=[
        new Meal("Avocado", 160, "minssed with onions", 0),
        new Meal("Nut Seed and Milk", 1000, "What a huge one yeah.", 1),
        new Meal("Bryani", 168,"The lovly one.", 2),
        new Meal("Dried Apples", 104, "Just an appetiser.", 3)
    ];
}
