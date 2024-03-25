import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
      [
        new Ingredient('Pork', 4),
        new Ingredient('Tomato', 3)
      ]),
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
      [
        new Ingredient('Beef', 2),
        new Ingredient('Potato', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getSelectedRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
