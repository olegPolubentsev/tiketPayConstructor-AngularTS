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

  classComfort: string = ''
  classSize: string = ''
  classOccupied: string = ''

  constructor() {
    setInterval(() => {
      if(this.house.style.change){
        this.determineClassComfort(this.house.comfort)
        this.determineClassSize(this.house.numberPlaces)
        this.determineClassOccupied(this.house.occupied)
        this.house.style.change = false
      }
    },500)
  }

  ngOnInit(): void {
    this.determineClassComfort(this.house.comfort)
    this.determineClassSize(this.house.numberPlaces)
    this.determineClassOccupied(this.house.occupied)
  }

  private determineClassComfort(input: number){
    switch (input){
      case 1:
        this.classComfort = 'comfort-height'
        break
      case 2:
        this.classComfort = 'comfort-middle'
        break
      case 3:
        this.classComfort = 'comfort-middle-low'
        break
      case 4:
        this.classComfort = 'comfort-low'
        break
      case 5:
        this.classComfort = 'comfort-low-low'
        break
      default:
        this.classComfort = ''
        break
    }
  }
  private determineClassSize(input: number){
    switch (input){
      case 12:
        this.classSize = 'size-big'
        break
      default:
        this.classSize = 'size-standard'
        break

    }
  }
  private determineClassOccupied(input: boolean){
    if(input)
      this.classOccupied = 'house-occupied'
    else
      this.classOccupied = ''
  }

  clickOnObject() {
    this.onChange.emit(this.house)
  }
}
