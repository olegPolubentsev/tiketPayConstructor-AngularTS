import { Component, OnInit } from '@angular/core';
import {MapService} from "../map.service";

@Component({
  selector: 'app-map-admin',
  templateUrl: './map-admin.component.html',
  styleUrls: ['./map-admin.component.scss']
})
export class MapAdminComponent implements OnInit {

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
  }

  changePictureObject(event: any) {
    //this.buttonHouseList[this.indexListAddChange].img = <File>event.target.files[0]
  }
  changeNumberPlacesObject() {
    //this.buttonHouseList[this.indexListAddChange].style.change = true
  }
  changeComfortObject() {
    //this.buttonHouseList[this.indexListAddChange].style.change = true
  }
  changeOccupiedObject() {
    //this.buttonHouseList[this.indexListAddChange].style.change = true
  }
}
