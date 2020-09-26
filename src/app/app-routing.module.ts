import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/recipes', pathMatch: "full"},
  {path: 'recipes', component:RecipesComponent, children: [
    { path:'' , component:RecipeStartComponent},
    {path: ':id/edit', component:RecipeEditComponent},
    {path: 'new', component:RecipeEditComponent },
     {path: ':id', component:RecipedetailComponent } ,
     
   
  ]},
  {path:'shopping-list', component:ShoppingListComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
