import { Directive, 
  ElementRef, 
  HostBinding,
   HostListener, 
   OnInit, 
   Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
     @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
           // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'pink');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
   // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
   this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
   // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
   this.backgroundColor = 'transparent';
  }

}
