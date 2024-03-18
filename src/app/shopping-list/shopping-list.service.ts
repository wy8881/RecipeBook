import {Recipe} from "../recipe/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Output} from "@angular/core";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name === ingredient.name) {
        this.ingredients[i].amount += ingredient.amount;
        this.ingredientsChanged.emit(this.ingredients.slice());
        return;
      }
    }
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for(let ingredient of ingredients) {
      for (let i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].name === ingredient.name) {
          this.ingredients[i].amount += ingredient.amount;
          break;
        }
      }
    }
    this.ingredients.push(...ingredients); //turn the array of ingredients into a list of ingredients
    this.ingredientsChanged.emit(this.ingredients.slice());
  }


}
