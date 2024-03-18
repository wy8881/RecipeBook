import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit{

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
