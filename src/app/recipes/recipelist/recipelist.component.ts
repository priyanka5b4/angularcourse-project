import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
   recipes:Recipe[] =[
     new Recipe('A test Recipe', 'Just a small  test', 'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C254'),
     new Recipe('Another test Recipe', 'Just a small  test', 'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C254')
   ];
   @Output() RecipeItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  AssignRecipe(eventData){
         this.RecipeItem.emit(eventData);
  }

} 
