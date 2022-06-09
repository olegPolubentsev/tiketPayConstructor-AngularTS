import {
  Component, ComponentRef,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";
import {ButtonHouse, SelectField} from "./interfases";
import {ObjectsService} from "./objects.service";
import {MapService} from "./map.service";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('dynamic',{read: ViewContainerRef})

  private viewRef: ViewContainerRef
  private componentRef: ComponentRef<DynamicComponent>




  constructor(
    public mapService: MapService
  ) { }

  ngOnInit(): void {}










  showModel(obj: ButtonHouse) {
    this.viewRef.clear()
    this.componentRef = this.viewRef.createComponent(DynamicComponent)    //создаем компонент
    //this.componentRef.instance.title = '123'
    this.componentRef.instance.close.subscribe( () =>{                //ожидаем прихода ивента от @Output и обрабатываем
      this.viewRef.clear()
    })
  }




}
