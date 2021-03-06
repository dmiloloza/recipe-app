import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Bread', 1),
    new Ingredient('Flour', 1),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  clearList() {
    this.ingredients = [];
  }

  // deleteFromList(ingredient: Ingredient) {
  //
  // }
}
