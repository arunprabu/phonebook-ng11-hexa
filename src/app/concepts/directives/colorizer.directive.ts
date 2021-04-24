import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  // Let's find the element in which the directive is used -- using ElementRef
  // Let's update the DOM element with spl instructions

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dependency Injection
    console.log('Inside Constructor');
    console.log(this.elRef.nativeElement);

    const el = this.elRef.nativeElement;

    // el.style.backgroundColor = 'red';

    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'height', '400px');

    // TODO: Learn about @HostListener()
  }

}
