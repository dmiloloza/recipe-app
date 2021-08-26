import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Breakfast', 'Eggs', 'https://www.budgetbytes.com/wp-content/uploads/2014/02/Soft-Boiled-Eggs-H-480x270.jpg'),
    new Recipe('Lounch', 'Pizza', 'https://i0.hippopx.com/photos/646/141/320/pizza-slice-of-pizza-slice-ham-preview.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
