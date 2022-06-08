import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from "./dynamic/dynamic.component";
import {Title} from "@angular/platform-browser";
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-pay-ticket',
  templateUrl: './pay-ticket.component.html',
  styleUrls: ['./pay-ticket.component.scss']
})
export class PayTicketComponent implements OnInit {



  private viewRef: ViewContainerRef
  private componentRef: ComponentRef<DynamicComponent>
  displayComponentAction: string = 'map'                                                                  //***************************************

  constructor(
    private title: Title

  ) {
    this.title.setTitle('Купить')
  }

  ngOnInit(): void {
  }



  beginPay() {
    this.displayComponentAction = 'users'
  }

  handlerChange(event: string) {
    console.log(event)
    if(this.displayComponentAction === 'users') this.displayComponentAction = 'map'
    else
      if(this.displayComponentAction === 'map') this.displayComponentAction = 'pay'
      else
        if(this.displayComponentAction === 'pay') this.displayComponentAction = ''
  }
}
