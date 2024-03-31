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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRountingModule} from "./app-rounting.module";
import {Recipe} from "./recipe/recipe.model";
import {RecipeStartComponent} from "./recipe/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe/recipe-edit/recipe-edit.component";

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
