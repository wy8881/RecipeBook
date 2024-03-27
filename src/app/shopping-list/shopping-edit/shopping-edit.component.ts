import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') form: NgForm;
  editMode = false;
  editIndex: number;
  editItem: Ingredient;
  editSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit(): void {
      this.editSub = this.shoppingListService.startedEditing.subscribe(
        (index:number) => {
          this.editIndex = index;
          this.editMode = true;
          this.editItem = this.shoppingListService.getIngredient(index);
          this.form.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        }
      )
    }

  onChangeItem(form:NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear()

  }

  onClear() {
    this.form.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();

  }

  ngOnDestroy(): void {
    this.editSub.unsubscribe();
  }
}
