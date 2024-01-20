import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinkOver]',
})
export class LinkOverDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = '#E2EAF8';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = '#fff';
  }
}
