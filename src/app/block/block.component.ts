import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core'
import {Block} from "../shared/interfaces";

@Component({
  selector: 'app-block',
  templateUrl: 'block.component.html',
  styleUrls: ['block.component.scss']
})

export class BlockComponent implements OnInit, OnChanges{

  @Input() block: Block
  @Output() clickInfo: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes)
  }

  ngOnInit(): void {

  }



  clickForBlock(id = 0)
  {
    this.clickInfo.emit(id)
  }
}
