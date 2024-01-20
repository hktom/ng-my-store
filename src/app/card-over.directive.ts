import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardOver]',
})
export class CardOverDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseenter') onMouseEnter(event: Event) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  }
}
