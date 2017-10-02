import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Details" #newDetails>
    <input placeholder="Calories" type="number" #newCalories>
    <button (click)="addMeal(newName.value,newDetails.value,newCalories.value);newName.value='';newDetails.value='';
      newCalories.value=''" class="btn-new-meal">Add</button>
  </div>
  `
})
export class NewMealComponent {
  @Output() onSubmitNewMeal = new EventEmitter();

  addMeal(newName, newDetails, newCalories){
    var newMeal = new Meal(newName, newDetails, newCalories);
    this.onSubmitNewMeal.emit(newMeal);

    console.log("Creating meal...")
  }
}
