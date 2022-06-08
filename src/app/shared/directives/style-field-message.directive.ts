import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyleFieldMessage]'
})
export class StyleFieldMessageDirective {

  //@Input('appStyleFieldMessage') flagDisplayErr?: boolean
  @Input() appStyleFieldMessageInput: {flagError: boolean, colorErr?: string, colorNormal: string, colorErrDefault?: string}

  constructor( private elRef: ElementRef, private ren: Renderer2) {

  }
  @HostListener('mouseenter') onEnter(){
    if(this.appStyleFieldMessageInput.flagError)
      this.ren.setStyle(this.elRef.nativeElement, 'background', this.appStyleFieldMessageInput.colorErr)
    else
      this.ren.setStyle(this.elRef.nativeElement, 'background', this.appStyleFieldMessageInput.colorNormal)
  }
  @HostListener('mouseleave') onLeave(){
    if(this.appStyleFieldMessageInput.flagError)
      this.ren.setStyle(this.elRef.nativeElement, 'background', this.appStyleFieldMessageInput.colorErrDefault)
    else
      this.ren.setStyle(this.elRef.nativeElement, 'background', null)

  }
}
