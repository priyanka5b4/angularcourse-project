import { templateJitUrl } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
      selector:'app-header',
      templateUrl: './app-header.component.html' 
   // template:'<p>Hello</p>'
})

export class AppHeaderComponent {
   @Output() selectedFeature= new EventEmitter<string>();
   
   selectFeature(feature:string){
           this.selectedFeature.emit(feature);
   }


}