import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {bounceInDown, bounceOutUp} from "ng-animate";

//----------------------------------------------------------------------------------------------------------------------
const modalAnimation = trigger('modal', [
  state('void', style({
    opacity: '0%'
  })),
  state('*', style({
    opacity: '100%'
  })),
  transition('void <=> *', animate(150))
])
const backdropAnimation = trigger('backdrop', [
  state('void', style({
    background: 'rgba(255, 255, 255, 0)'
  })),
  state('*', style({
    background: 'rgba(0,0,0,.4)'
  })),
  transition('void <=> *', animate(150))
])
//----------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-dynamic-mes',
  templateUrl: './dynamic-mes.component.html',
  styleUrls: ['./dynamic-mes.component.scss'],
  animations: [
    backdropAnimation,
    modalAnimation
  ]
})
export class DynamicMesComponent implements OnInit {

  modalBlock = true
  backdropBlock = true
  timeLeaveModal = 1200

  @Input() title = '';
  @Output() close = new EventEmitter<void>()
  @Output() getTitle = this.title

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.modalBlock = false
    },this.timeLeaveModal - 200)
    setTimeout(()=>{
      this.backdropBlock = true
    },this.timeLeaveModal - 150)
    setTimeout(()=>{
      this.close.emit()
    },this.timeLeaveModal)
  }

}
