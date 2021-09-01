import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) name!: ElementRef;
  @ViewChild('amountInput', {static: true}) amount!: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();
  @Output() clearIngredients = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    if (!this.name.nativeElement.value || !this.amount.nativeElement.value) {
      return alert('Please add Name and Amount of Ingredient.');
    }
    const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
    this.newIngredient.emit(ingredient);
  }

  onClear() {
    this.clearIngredients.emit();
  }

  onDelete() {

  }
}
