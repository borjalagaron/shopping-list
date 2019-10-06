import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Risotto 🍚🍄🧀',
      'Arroz con queso',
      'https://img.chefkoch-cdn.de/rezepte/139801060346833/bilder/589190/crop-600x400/champignon-risotto.jpg'
    ),
    new Recipe(
      'Berenjenas rellenas 🍆',
      'POllas',
      'https://t1.rg.ltmcdn.com/es/images/4/3/6/img_berenjenas_rellenas_de_carne_picada_y_tomate_62634_600.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
