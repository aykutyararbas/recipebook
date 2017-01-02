import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  private isAdd: boolean = true;
  @Input() private item: Ingredient;
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {}

   ngOnChanges(changes){
      if(changes.item.currentValue === null ){
        this.isAdd = true;
        this.item = { name: null , amount: null};
      } else {
        this.isAdd = false;
      }
   }
  onSubmit(newItem: Ingredient){
    if(!this.isAdd){
        this.shoppingListService.editItem(this.item, newItem);
    } else {
      this.item = new Ingredient(newItem.name, newItem.amount);
      this.shoppingListService.addItem(newItem);
    }
  }

  onDelete(){
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = false;
    this.cleared.emit(null);
  }
}
