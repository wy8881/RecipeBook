import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{

  @Input() selectedRecipe: Recipe;

  ngOnInit(): void {
  }

}
