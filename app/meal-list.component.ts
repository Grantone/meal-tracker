import { Component } from '@angular/core';

@Component({
  selector: 'meals',
  template: `
  <h3>Meals of The Day!</h3>
  <div *ngFor="let currentMeal of favoriteMeals">
    <p>{{currentMeal}}</p>
  </div>
  `
})

export class MealListComponent {
  favoriteMeals: string[] = ["Wheat Bread", "Dried Apricots", "Nut seed and Coffee"];
}
