import { Component,Input, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
    @Input('recipeItem') recipe:Recipe;
    @Input() index:number;

  constructor(private recipeService:RecipeService,
    private route:ActivatedRoute,
    private router:Router) {  }

  ngOnInit(): void {
  }

  

}
