import { Component } from '@angular/core';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
    </div>
    <h3>Best Meals</h3>
        <div *ngFor="let currentMeal of favoriteMeals">
          <p>Name:{{meal.name}}</p>
          <p>Calories:{{meal.calories}}</p>
          <p>Description:{{meal.description}}</p>
        </div>
        </div>
        <div *ngFor="let currentTask of tasks">
          <h3>{{ c }}</h3>
          <button (click)="showDetails(currentTask)">Edit</button>
        </div>
        <div *ngIf="selectedTask">
          <h1>Edit Task</h1>
          <div>
            <label>Enter Task Description:</label>
            <input [(ngModel)]="selectedTask.description">
          </div>
          <div>
            <label>Enter Task ID:</label>
            <input [(ngModel)]="selectedTask.id">
            <button (click)="finishedEditing()">Done</button>
          </div>
        </div>

  </div>
  `
})

export class AppComponent {
'Meals' = 'Meal' [
      new Meal("Avocado; 160 calories per 100 grams.", 0),
      new Meal("Nut Seed and Milk; 1000 calories per 100.", 1),
      new Meal("Bryani; 168 calories er 100 grams.", 2),
      new Meal("Dried Apples; 104 calories.", 3)
  ];

}
