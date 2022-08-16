import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultColor:string='transparent'
@Input() highlightColor:string='blue'

  constructor(private elref:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
   // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue',false,false);
    this.backgroundColor=this.defaultColor
  }
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

  @HostListener('mouseenter') mouseover(eventData:Event){
   // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor
  }
 @HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
  this.backgroundColor=this.defaultColor
  }
}
