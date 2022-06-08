import {Component, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyleErrorText]'
})
export class StyleErrorTextDirective {

  @Input() appStyleErrorTextInput: {error: string, colorErr?: string, colorNormal?: string}

  constructor( private elRef: ElementRef, private ren: Renderer2) {

  }
  ngAfterViewInit(): void {
    if(this.appStyleErrorTextInput.error != 'Вход выполнен успешно'){
      this.elRef.nativeElement.style.color = 'red'//this.appStyleErrorTextInput.colorErr
    }
    else
    {
      this.elRef.nativeElement.style.color = 'green'//this.appStyleErrorTextInput.colorNormal
    }
  }

  // onError(){
  //   this.elRef.nativeElement.style.color = 'red'
  // }
  // onNormal(){
  //   this.elRef.nativeElement.style.color = 'green'
  // }
}
