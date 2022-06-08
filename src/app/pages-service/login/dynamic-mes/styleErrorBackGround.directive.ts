import {Component, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyleErrorBackGround]'
})
export class StyleErrorBackGroundDirective {

  @Input() appStyleErrorBackGroundInput: { error: string, colorErr?: string, colorNormal?: string }

  constructor(private elRef: ElementRef, private ren: Renderer2) {

  }

  ngAfterViewInit(): void {
    if (this.appStyleErrorBackGroundInput.error != 'Вход выполнен успешно') {
      this.elRef.nativeElement.style.background = this.appStyleErrorBackGroundInput.colorErr
    } else {
      this.elRef.nativeElement.style.background = this.appStyleErrorBackGroundInput.colorNormal
    }
  }
}
