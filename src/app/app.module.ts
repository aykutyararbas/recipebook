import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component'
import {routing} from "./app.router";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { RbdropdownDirective } from './rbdropdown.directive';
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {RecipesModule} from "./recipes/recipes.module";
import { HomeComponent } from './home.component';
import {RecipeService} from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RbdropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ShoppingListModule
  ],
  providers: [ShoppingListService, HttpModule, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
