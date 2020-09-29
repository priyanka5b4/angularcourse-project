import { Component,  OnDestroy,  OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArgumentOutOfRangeError, Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit , OnDestroy{
   /*   @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef; */
  /*  @Output() addEvent= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
        const newIngrediend = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
        this.addEvent.emit(newIngrediend);
  } */
  @ViewChild('f', { static:true}) slform: NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex :number;
  editedItem: Ingredient
  ngOnInit(){
       this.subscription =   this.shoppingListService.startedEditting.subscribe(
            (index: number) =>{
                   this.editMode = true; 
                   this.editedItemIndex = index;
                   this.editedItem = this.shoppingListService.getIngredient(index);
                     this.slform.setValue({
                      name: this.editedItem.name,
                      amount: this.editedItem.amount
                    })
                  }
          );
  }
  constructor(private shoppingListService:ShoppingListService){
       
  }
  onAddItem( )
    {   
    //const newIngrediend = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    
      const value = this.slform.value;
      const newIngrediend = new Ingredient(value.name, value.amount)
      
      if(this.editMode){
        this.shoppingListService.UpdateIngrediend(this.editedItemIndex, this.editedItem);
          }

      else     
      this.shoppingListService.AddIngrediend(newIngrediend);
         this.slform.reset();
         this.editMode = false;
   
      }

  onClear(){
          this.slform.reset();
          this.editMode = false;
      
      }

  onDelete(){
    this.onClear(); 
    this.shoppingListService.DeleteIngredient(this.editedItemIndex);
  
    }

  ngOnDestroy(){
        this.subscription.unsubscribe();
      }

}
