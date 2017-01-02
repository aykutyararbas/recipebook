import {NgModule} from "@angular/core";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/**
 * Created by ayararba on 1/1/17.
 */
@NgModule(
  {
    declarations: [
      ShoppingListComponent,
      ShoppingListAddComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ]
  }
)
export class ShoppingListModule {}
