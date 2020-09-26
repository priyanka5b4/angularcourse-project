import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
   recipes:Recipe[] =[];
 
  constructor(private recipeService: RecipeService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
}

  
} 
