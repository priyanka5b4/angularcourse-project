import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model'
@Injectable()
export class RecipeService{
    RecipeSelected = new EventEmitter<Recipe>();
    
    recipes:Recipe[] =[
       new Recipe('Pizza', 'Paneer Pizza', 
       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfVFB-65jhIjOpESJSeSvxSoRs5mcaogKObA&usqp=CAU', 
       [
           new Ingredient('Tomato', 100),
           new Ingredient('Corn', 20)

       ])  ,
       new Recipe('Burger', 'Big Burger',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvRTensYjuHXW_oc67JH0_FME1L99SuPu4YA&usqp=CAU',
          [ new Ingredient('Bread', 20),
            new Ingredient('Tomato', 20)
          ])
      ];
    
    
      constructor(private shoppingListService:ShoppingListService){
              
      }
      

      getRecipes(){
             return this.recipes.slice();
      }
      getRecipe(id:number): Recipe{
        return this.recipes[id];
      }
      AddIngredientsToShoppingList(ingredient:Ingredient[]){
       this.shoppingListService.AddIngredients(ingredient);
      }
}