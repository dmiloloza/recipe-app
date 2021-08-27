import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
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

}
