import {
  Component, ComponentRef, EventEmitter,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";
import {ButtonHouse, ButtonHouseTemplate, SelectField} from "./interfases";
import {ObjectsService} from "./objects.service";



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('dynamic',{read: ViewContainerRef})

  private viewRef: ViewContainerRef
  private componentRef: ComponentRef<DynamicComponent>

  inputNewObject: ButtonHouse = {
    type: 'house',
    numObj: 1,
    position: {
      top: '0',
      left: '0',
      rotation: '0'
    },
    numberPlaces: 2,
    comfort: 4,
    occupied: false,
    size: {
      width: '0',
      height: '0'
    },
    name: '',
    img: '',
    style: {
      background: '',
      change: false,
      display: true
    },
    text: '',
    color: '',
    fontSize: '14'
  }
  comfortPos: SelectField[] = [
    {value: '1', viewValue: 'Отличный'},
    {value: '2', viewValue: 'Хороший'},
    {value: '3', viewValue: 'Средний'},
    {value: '4', viewValue: 'Ниже среднего'},
    {value: '5', viewValue: 'Удавлетворительный'},
  ]
  objects: SelectField[] = [
    {value: 'place', viewValue: 'Место'},
    {value: 'house', viewValue: 'Дом'},
    {value: 'object', viewValue: 'Объект инфраструктуры'},
    {value: 'text', viewValue: 'Текст'}
  ]


  reservSaveObject: ButtonHouse = {
    type: 'house',
    numObj: 1,
    position: {
      top: '0',
      left: '0',
      rotation: '0'
    },
    numberPlaces: 2,
    comfort: 4,
    occupied: false,
    size: {
      width: '0',
      height: '0'
    },
    name: '',
    img: '',
    style: {
      background: '',
      change: false,
      display: true
    },
    text: '',
    color: '',
    fontSize: '14'
  }
  indexListAddChange = 0
  flagStatusChangeMap = 'non'
  flagAdditionalSetting = true
  buttonHouseList: ButtonHouse[] = []


  constructor(private objectService: ObjectsService) { }

  ngOnInit(): void {
    this.objectService.getAllObject().subscribe(response => {
      this.buttonHouseList = response
      console.log(response)
    })
  }

  addObjectOnMap() {
    this.addNewObjectToTempArray()
    this.flagStatusChangeMap = 'addNewObject'
  }
  addNewObjectToTempArray(){
    let newHouse: ButtonHouse
    if(this.buttonHouseList.length > 0) {
      this.inputNewObject.numObj = this.buttonHouseList[this.buttonHouseList.length - 1].numObj + 1
    }
    else this.inputNewObject.numObj = 1

    newHouse = {
      name: '',
      img: this.inputNewObject.img,
      type: this.inputNewObject.type,
      numObj: this.inputNewObject.numObj,
      occupied: false,
      comfort: +this.inputNewObject.comfort,
      numberPlaces: +this.inputNewObject.numberPlaces,
      position: {
        top: `${+this.inputNewObject.position.top}%`,
        left: `${+this.inputNewObject.position.left}%`,
        rotation: `${+this.inputNewObject.position.rotation}deg`
      },
      style: {background: this.inputNewObject.style.background,
        display: false,
        change: false
      },
      text: this.inputNewObject.text,
      fontSize: `${this.inputNewObject.fontSize}px`,
      color: this.inputNewObject.color,
      size: {
        width: `${this.inputNewObject.size.width}px`,
        height: `${this.inputNewObject.size.height}px`
      }
    }
    this.buttonHouseList.push(newHouse)
    this.indexListAddChange = this.buttonHouseList.length-1
  }
  saveNewObject() {
    this.objectService.createObject(this.buttonHouseList[this.indexListAddChange]).subscribe((res)=>{
    })
    this.flagStatusChangeMap = 'non'
  }
  cancelNewObject() {
    if(this.flagStatusChangeMap === 'addNewObject') {
      this.buttonHouseList.pop()
      this.flagStatusChangeMap = 'non'
    }
    if(this.flagStatusChangeMap === 'waitClickForObject') {
      this.flagStatusChangeMap = 'non'
    }
    if(this.flagStatusChangeMap === 'changeObject') {

      this.buttonHouseList[this.indexListAddChange].numObj = this.reservSaveObject.numObj
      this.buttonHouseList[this.indexListAddChange].comfort = this.reservSaveObject.comfort
      this.buttonHouseList[this.indexListAddChange].position.top = this.reservSaveObject.position.top
      this.buttonHouseList[this.indexListAddChange].position.left = this.reservSaveObject.position.left
      this.buttonHouseList[this.indexListAddChange].position.rotation = this.reservSaveObject.position.rotation
      this.buttonHouseList[this.indexListAddChange].numberPlaces = this.reservSaveObject.numberPlaces
      this.fillChangingField()
    }

  }
  deleteObject() {
    for(let i = this.indexListAddChange; i < this.buttonHouseList.length-1; ++i){
      this.buttonHouseList[i] = this.buttonHouseList[i+1]
    }
    this.buttonHouseList.pop()
    this.flagStatusChangeMap = 'non'
    // this.objectService.deleteObject('-N4371q7yDzlxRzpGo_d').subscribe(()=>{
    //   console.log('del')})
  }
  changePictureObject(event: any) {
    //this.buttonHouseList[this.indexListAddChange].img = <File>event.target.files[0]
  }
  changeTypeObject() {
    this.buttonHouseList[this.indexListAddChange].type = this.inputNewObject.type
  }
  changeHorizontalPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.left = `${+this.inputNewObject.position.left}%`
  }
  changeVerticalPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.top = `${+this.inputNewObject.position.top}%`
  }
  changeRotationPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.rotation = `${+this.inputNewObject.position.rotation}deg`
  }
  changeIdObject() {
    this.buttonHouseList[this.indexListAddChange].numObj = +this.inputNewObject.numObj
  }
  changeNumberPlacesObject() {
    this.buttonHouseList[this.indexListAddChange].numberPlaces = +this.inputNewObject.numberPlaces
    this.buttonHouseList[this.indexListAddChange].style.change = true
  }
  changeComfortObject() {
    this.buttonHouseList[this.indexListAddChange].comfort = +this.inputNewObject.comfort
    this.buttonHouseList[this.indexListAddChange].style.change = true
  }
  changeOccupiedObject() {
    this.buttonHouseList[this.indexListAddChange].occupied = this.inputNewObject.occupied
    this.buttonHouseList[this.indexListAddChange].style.change = true
  }

  handlerChange(event: ButtonHouse) {
    if(this.flagStatusChangeMap === 'waitClickForObject' || this.flagStatusChangeMap === 'changeObject'){
      this.indexListAddChange = this.findClickObject(event)
      this.fillChangingField()

      this.reservSaveObject.numObj = this.buttonHouseList[this.indexListAddChange].numObj
      this.reservSaveObject.comfort = this.buttonHouseList[this.indexListAddChange].comfort
      this.reservSaveObject.position.top = this.buttonHouseList[this.indexListAddChange].position.top
      this.reservSaveObject.position.left = this.buttonHouseList[this.indexListAddChange].position.left
      this.reservSaveObject.position.rotation = this.buttonHouseList[this.indexListAddChange].position.rotation
      this.reservSaveObject.numberPlaces = this.buttonHouseList[this.indexListAddChange].numberPlaces

      this.flagStatusChangeMap = 'changeObject'
    }
    if(this.flagStatusChangeMap === 'non'){
      this.showModel(event)
    }
  }

  fillChangingField() {
    this.inputNewObject.position.left = this.buttonHouseList[this.indexListAddChange].position.left
    this.inputNewObject.position.top = this.buttonHouseList[this.indexListAddChange].position.top
    this.inputNewObject.position.rotation = this.buttonHouseList[this.indexListAddChange].position.rotation
    this.inputNewObject.numObj = this.buttonHouseList[this.indexListAddChange].numObj
    this.inputNewObject.comfort = this.buttonHouseList[this.indexListAddChange].comfort
    this.inputNewObject.numberPlaces = this.buttonHouseList[this.indexListAddChange].numberPlaces
    // @ts-ignore
    this.inputNewObject.type = this.buttonHouseList[this.indexListAddChange].type
  }

  findClickObject(clickObj: ButtonHouse){
    const changObjectId = clickObj.numObj
    for (let i = 0; i < this.buttonHouseList.length; ++i){
      if(this.buttonHouseList[i].numObj === changObjectId) {
        return i
      }
    }
    return 0
  }

  ChangeObjectOnMap() {
    this.flagStatusChangeMap = 'waitClickForObject'
  }


  showModel(obj: ButtonHouse) {
    this.reservSaveObject = obj
    this.viewRef.clear()
    this.componentRef = this.viewRef.createComponent(DynamicComponent)    //создаем компонент
    //this.componentRef.instance.title = '123'
    this.componentRef.instance.close.subscribe( () =>{                //ожидаем прихода ивента от @Output и обрабатываем
      this.viewRef.clear()
    })
  }

  settingObject() {
    this.flagAdditionalSetting = true
  }

  enterFileOnLocal() {

  }
}
