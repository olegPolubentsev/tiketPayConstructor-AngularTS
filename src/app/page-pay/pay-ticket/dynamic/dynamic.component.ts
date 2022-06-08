import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonHouse} from "../map/interfases";


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  @Input() title: ButtonHouse;
  @Output() close = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {

  }

}
