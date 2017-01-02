import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: []
})
export class HeaderComponent   {

  constructor(private recipeService: RecipeService){

  }

  onStore(){
    this.recipeService.storeData().subscribe( data => {
      console.log("Data Saved");
    });
  }


  onFetch(){
    this.recipeService.getData();
  }
}
