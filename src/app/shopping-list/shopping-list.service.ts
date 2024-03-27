import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name === ingredient.name) {
        this.ingredients[i].amount += ingredient.amount;
        this.ingredientsChanged.next(this.ingredients.slice());
        return;
      }
    }
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
