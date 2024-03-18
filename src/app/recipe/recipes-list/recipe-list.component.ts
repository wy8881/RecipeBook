import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit(): void {
  }

}
