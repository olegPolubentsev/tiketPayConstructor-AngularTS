import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonHouse} from "../interfases";


@Component({
  selector: 'app-button-house',
  templateUrl: './button-house.component.html',
  styleUrls: ['./button-house.component.scss']
})
export class ButtonHouseComponent implements OnInit {

  @Input() house: ButtonHouse
  @Output() onChange: EventEmitter<ButtonHouse> = new EventEmitter<ButtonHouse>()

  constructor() {}
  ngOnInit(): void {}

  clickOnObject() {
    this.onChange.emit(this.house)
  }
}
