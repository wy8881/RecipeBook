import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipes-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipesItemComponent } from './recipe/recipes-list/recipe-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from "@angular/forms";
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    provideClientHydration(),
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
