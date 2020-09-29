import {  EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientsAdded = new Subject<Ingredient[]>();
    startedEditting= new Subject<number>();
    private ingredients:Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
     
      getIngredients(){
              return this.ingredients.slice();
      }
      getIngredient(index: number){
            return this.ingredients[index];
      }
      AddIngrediend(ingredient:Ingredient){
          this.ingredients.push(ingredient);
         this.ingredientsAdded.next(this.ingredients.slice());
       }
       UpdateIngrediend(index: number,ingredient: Ingredient){
              this.ingredients[index] = ingredient ;
              this.ingredientsAdded.next(this.ingredients.slice());
       }
       AddIngredients(ingredients: Ingredient[]){
            this.ingredients.push(...ingredients);
            this.ingredientsAdded.next(this.ingredients.slice());
       }
       DeleteIngredient(index:number){
            this.ingredients.splice(index,1);
            this.ingredientsAdded.next(this.ingredients.slice());
       }
}