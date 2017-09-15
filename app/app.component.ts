import { Component } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
    </div>
<div class="container">
<div class="col-md-8">
    <h3>Best Meals</h3>
    <meals></meals>
        <div *ngFor="let currentMeal of favoriteMeals">
          <p>Name:{{meal.name}}</p>
          <p>Calories:{{meal.calories}}</p>
          <p>Description:{{meal.description}}</p>
        </div>
        </div>
        <div class="col-md-4">
        <h3 class="add">Add Meal:</h3>
        <div>
        <input placeholder="Meal Type">
        <input placeholder="Number of Calories">
        <input placeholder="Description">
        <button type="confirm!" class="btn btn-primary">Add</button>
        </div>
          </div>
        </div>
  `
})

export class AppComponent {
meals:Meal[]=[
      new Meal("Avocado", 160, "minssed with onions", 0),
      new Meal("Nut Seed and Milk", 1000, "What a huge one yeah.", 1),
      new Meal("Bryani", 168,"The lovly one.", 2),
      new Meal("Dried Apples", 104, "Just an appetiser.", 3)
  ];

}
