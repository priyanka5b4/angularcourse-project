import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  
 recipe:Recipe;
 id:number
  constructor(private recipeService:RecipeService,
       private router:Router,
        private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['id']);  
        this.id = +params['id'];       
       this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onToShoppingList(){
        this.recipeService.AddIngredientsToShoppingList(this.recipe.ingredients); 
      
        
  }
  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  onDeleteRecipe(){
       this.recipeService.deleteRecipe(this.id);
       this.router.navigate(['/recipes']);
  }

}
