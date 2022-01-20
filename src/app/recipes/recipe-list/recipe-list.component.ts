import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Breakfast', 'Eggs', 'https://www.budgetbytes.com/wp-content/uploads/2014/02/Soft-Boiled-Eggs-H-480x270.jpg'),
    new Recipe('Lounch', 'Pizza', 'https://i0.hippopx.com/photos/646/141/320/pizza-slice-of-pizza-slice-ham-preview.jpg'),
    new Recipe('Dinner', 'Pasta', 'https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-feat.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('This is test commit')
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeDetails.emit(recipe);
  }
}
