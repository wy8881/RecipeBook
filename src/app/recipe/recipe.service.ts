import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  private recipes:Recipe[] = [
    new Recipe('Double Cheese Burger',
      'Double Cheeseburger – regular cheeseburger with two extra ingredients, which are an additional beef patty and another slice of cheese is a perfect choice for everyone who loves juicy burgers with a lot of stuffing!',
      'https://mcdonalds-menu.co.uk/wp-content/uploads/2022/07/double-cheeseburger.png',
      [
        new Ingredient('Beef patties', 2),
        new Ingredient('Bun', 2),
        new Ingredient('Cheddar cheese',2),
        new Ingredient('Ketchup', 1),
        new Ingredient('Mustard', 1),
        new Ingredient('Dill Pickles', 2),
        new Ingredient('Onion', 1)
      ]),
    new Recipe('Big Mac',
      'Big Mac – this double layered burger is a McDonald’s classic! Two perfectly fried patties with a special sauce attract those who have tried this dish at least once, and even those who have never heard of it before!',
      'https://mcdonalds-menu.co.uk/wp-content/uploads/2022/07/big-mac.png',
      [
        new Ingredient('Sesame bun', 2),
        new Ingredient('Beef patties', 2),
        new Ingredient('Iceberg lettuce',2),
        new Ingredient('Big Mac sauce',1),
        new Ingredient('Cheddar cheese',2),
        new Ingredient('Dill Pickle', 2),
        new Ingredient('Onion', 1)

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
