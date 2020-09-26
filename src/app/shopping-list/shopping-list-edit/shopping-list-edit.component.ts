import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
     @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
  /*  @Output() addEvent= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
        const newIngrediend = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
        this.addEvent.emit(newIngrediend);
  } */
  ngOnInit(){

  }
  constructor(private shoppingListService:ShoppingListService){
       
  }
    onIngrediendAdded()
    {   
    const newIngrediend = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.AddIngrediend(newIngrediend);

      }

}
