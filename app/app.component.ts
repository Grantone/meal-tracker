import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron"
  <h1>The Meal Tracker</h1>
  </div>
  <h1>{{Kebab}}</h1>
  <h2>{{meal.name}} details!</h2>
  <div><label>calories: </label>{{.calories}}</div>
  <div><label>name: </label>{{meal.name}}</div>
  `
})

export class AppComponent {
title = 'Meal 1'
}
