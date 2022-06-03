import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() appHighlighter:"";

  constructor( private el:ElementRef) {
    // this.el.nativeElement.style.backgroundColor="red";
   }

  //  @HostListener('mouseenter') mouseEnter(){
  //    this.doHighlight(this.myHighlightColor);
  //  }

   @HostListener('mouseenter') onMouseEnter() {
    this.doHighlight(this.appHighlighter || 'red');
  }

   @HostListener('mouseleave') mouseLeave(){
    this.doHighlight(this.appHighlighter);
  }

   doHighlight(myHighlightColor:any){
    this.el.nativeElement.style.backgroundColor=myHighlightColor;
   }

}
