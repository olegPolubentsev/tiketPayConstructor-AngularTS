import {
  Component, ComponentRef,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";
import {ButtonHouse, SelectField} from "./interfases";
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

  inputNewObject = {
    type: 'house',
    id: 1,
    inputRangeHorizontalPos: '0',
    inputRangeVerticalPos: '0',
    inputRangeRotationPos: '0',
    numberPlaces: 2,
    comfort: 4,
    occupied: false,
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


  reservSaveObject: ButtonHouse = {name: '', type: 'house', id: 0, occupied: false, comfort: 0, numberPlaces: 0, position: {top: '0%', left: '0%', rotation: '0deg'}, style: {background: 'grey', display: false}}
  indexListAddChange = 0
  flagStatusChangeMap = 'non'
  flagAdditionalSetting = true
  buttonHouseList: ButtonHouse[] = [
    {name: '', id: 1, occupied: false, comfort: 1, numberPlaces: 12, position: {top: '9%', left: '26%', rotation: '-10deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 2, occupied: false, comfort: 1, numberPlaces: 12, position: {top: '51%', left: '47%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},

    {name: '', id: 3, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '14%', left: '50%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 4, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '15%', left: '47%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 5, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '17%', left: '44.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 6, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '19%', left: '42.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 7, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '21%', left: '40.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 8, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '25%', left: '36.6%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 9, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '27%', left: '34.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    {name: '', id: 10, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '29%', left: '32.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 11, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '31%', left: '29.0%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 12, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '33%', left: '26.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 13, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '35%', left: '32%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 14, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '38.5%', left: '28%', rotation: '-70deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 15, occupied: false, comfort: 2, numberPlaces: 4, position: {top: '43%', left: '24%', rotation: '-70deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 16, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '18%', left: '50%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 17, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '20%', left: '47.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 18, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '22%', left: '45.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 19, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '24%', left: '43.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 20, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '28%', left: '39.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 21, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '30%', left: '37.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 22, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '32%', left: '35.3%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 23, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '24%', left: '51.5%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 24, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '26%', left: '49.4%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 25, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '28%', left: '47.3%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 26, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '30%', left: '45.2%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 27, occupied: false, comfort: 1, numberPlaces: 6, position: {top: '18%', left: '55%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 28, occupied: false, comfort: 1, numberPlaces: 4, position: {top: '20.7%', left: '53.7%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 29, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '32%', left: '43.1%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 30, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '38%', left: '35%', rotation: '-45deg'}, style: {background: 'grey, display: true', display: true, change: false}},
    // {id: 31, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '40%', left: '32.9%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 32, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '42%', left: '30.8%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 33, occupied: false, comfort: 2, numberPlaces: 6, position: {top: '44%', left: '28.7%', rotation: '-45deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // //-----------------------------------------------------------------------------------------------------------------------------------------------
    //
    // {id: 34, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '52%', left: '68%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 35, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '53%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 36, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '54%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 37, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '55%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 38, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '56%', left: '56%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 39, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '54%', left: '74%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 40, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '55%', left: '71%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 41, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '56%', left: '68%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 42, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '57%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 43, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '58%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 44, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '59%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 45, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '59%', left: '72%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 46, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '60%', left: '69%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 47, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '61%', left: '66%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 48, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '62%', left: '63%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 49, occupied: false, comfort: 3, numberPlaces: 4, position: {top: '63%', left: '60%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // //-----------------------------------------------------------------------------------------------------------------------------------------------
    //
    // {id: 50, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69%', left: '63%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 51, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '70.7%', left: '60.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 52, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '72.4%', left: '58%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 53, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69%', left: '72%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 54, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '70.7%', left: '69.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 55, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '72.4%', left: '67%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 56, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '74.1%', left: '64.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 57, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '75.8%', left: '62%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 58, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '73%', left: '74%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 59, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '74.7%', left: '71.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 60, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '76.4%', left: '69%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 61, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '78.1%', left: '66.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 62, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '79.8%', left: '64%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 63, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '69.6%', left: '79%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 64, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '76.5%', left: '77%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 65, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '78.2%', left: '74.5%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 66, occupied: false, comfort: 4, numberPlaces: 4, position: {top: '79.9%', left: '72%', rotation: '-35deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // //-----------------------------------------------------------------------------------------------------------------------------------------------
    //
    // {id: 67, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '48.5%', left: '65%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 68, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '49.5%', left: '62%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 69, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '50.5%', left: '59%', rotation: '-20deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 70, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '37.5%', left: '64%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 71, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '39.5%', left: '68%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 72, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '41.5%', left: '71%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 73, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '42%', left: '64%', rotation: '35deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 74, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '46%', left: '70%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 75, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '41%', left: '78%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 76, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '44%', left: '76.5%', rotation: '-65deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 77, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '30%', left: '77.2%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 78, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '33%', left: '77%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
    // {id: 79, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '36%', left: '76.8%', rotation: '-87deg'}, style: {background: 'grey', display: true, change: false}},
    //
    // {id: 80, occupied: false, comfort: 5, numberPlaces: 8, position: {top: '23%', left: '67%', rotation: '-55deg'}, style: {background: 'grey', display: true, change: false}},
  ]

  constructor(private objectService: ObjectsService) { }

  ngOnInit(): void {

  }

  addObjectOnMap() {
    this.addNewObjectToTempArray()
    this.flagStatusChangeMap = 'addNewObject'
  }
  addNewObjectToTempArray(){
    let newHouse: ButtonHouse
    this.inputNewObject.id = this.buttonHouseList[this.buttonHouseList.length - 1].id + 1

    newHouse = {
      name: '',
      type: this.inputNewObject.type,
      id: this.inputNewObject.id,
      occupied: false,
      comfort: +this.inputNewObject.comfort,
      numberPlaces: +this.inputNewObject.numberPlaces,
      position: {
        top: `${+this.inputNewObject.inputRangeVerticalPos}%`,
        left: `${+this.inputNewObject.inputRangeHorizontalPos}%`,
        rotation: `${+this.inputNewObject.inputRangeRotationPos}deg`
      },
      style: {background: 'grey'}}

    this.buttonHouseList.push(newHouse)
    this.indexListAddChange = this.buttonHouseList.length-1

    this.objectService.createObject(newHouse).subscribe((val)=>{
      console.log('Объект добавлен! :)')
      console.log(val)
    })
  }
  saveNewObject() {
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

      this.buttonHouseList[this.indexListAddChange].id = this.reservSaveObject.id
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
  changeTypeObject() {
    this.buttonHouseList[this.indexListAddChange].type = this.inputNewObject.type
  }
  changeHorizontalPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.left = `${+this.inputNewObject.inputRangeHorizontalPos}%`
  }
  changeVerticalPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.top = `${+this.inputNewObject.inputRangeVerticalPos}%`
  }
  changeRotationPositionObject() {
    this.buttonHouseList[this.indexListAddChange].position.rotation = `${+this.inputNewObject.inputRangeRotationPos}deg`
  }
  changeIdObject() {
    this.buttonHouseList[this.indexListAddChange].id = +this.inputNewObject.id
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

      this.reservSaveObject.id = this.buttonHouseList[this.indexListAddChange].id
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
    this.inputNewObject.inputRangeHorizontalPos = this.buttonHouseList[this.indexListAddChange].position.left
    this.inputNewObject.inputRangeVerticalPos = this.buttonHouseList[this.indexListAddChange].position.top
    this.inputNewObject.inputRangeRotationPos = this.buttonHouseList[this.indexListAddChange].position.rotation
    this.inputNewObject.id = this.buttonHouseList[this.indexListAddChange].id
    this.inputNewObject.comfort = this.buttonHouseList[this.indexListAddChange].comfort
    this.inputNewObject.numberPlaces = this.buttonHouseList[this.indexListAddChange].numberPlaces
    // @ts-ignore
    this.inputNewObject.type = this.buttonHouseList[this.indexListAddChange].type
  }

  findClickObject(clickObj: ButtonHouse){
    const changObjectId = clickObj.id
    for (let i = 0; i < this.buttonHouseList.length; ++i){
      if(this.buttonHouseList[i].id === changObjectId) {
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
