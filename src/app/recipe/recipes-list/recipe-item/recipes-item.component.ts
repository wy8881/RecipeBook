import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() id: number;


  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.next(this.recipe);
  }



}
