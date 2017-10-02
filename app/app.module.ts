import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, MealListComponent, MealComponent, EditMealDetailsComponent, NewMealComponent, CaloriesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
