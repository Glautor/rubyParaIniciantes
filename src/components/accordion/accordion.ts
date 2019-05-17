import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
 
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {
 
  @ViewChild('accordionWrapper', {read: ElementRef}) accordionWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit(){
      this.renderer.setElementStyle(this.accordionWrapper.nativeElement, 'height', this.expandHeight + 'px');    
  }

}
