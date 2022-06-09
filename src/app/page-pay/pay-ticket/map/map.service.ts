import {Injectable, OnInit} from "@angular/core";
import {ButtonHouse, SelectField} from "./interfases";
import {ObjectsService} from "./objects.service";

@Injectable({providedIn: "root"})

export class MapService implements OnInit{

  constructor(private objectService: ObjectsService) {
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
    numObj: '1',
    position: {
      top: '0',
      left: '0',
      rotation: '0'
    },
    numberPlaces: '2',
    comfort: '4',
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

  buttonHouseList: ButtonHouse[] = []
  indexListAddChange = 0
  flagAdditionalSetting = true
  flagStatusChangeMap = 'non'

  ngOnInit() {
    this.objectService.getAllObject().subscribe(response => {
      this.buttonHouseList = response
    })
  }

  addObjectOnMap() {
    this.addNewObjectToTempArray()
    this.flagStatusChangeMap = 'addNewObject'
  }
  addNewObjectToTempArray(){

    let newNumObj = '1'
    if(this.buttonHouseList.length > 0) {
      newNumObj = (+this.buttonHouseList[this.buttonHouseList.length - 1].numObj + 1).toString()
    }

    const newObject: ButtonHouse = {
      type: 'house',
      numObj: <string>newNumObj,
      position: {
        top: '0',
        left: '0',
        rotation: '0'
      },
      numberPlaces: '2',
      comfort: '4',
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
    this.buttonHouseList.push(newObject)
    this.indexListAddChange = this.buttonHouseList.length-1
  }
  saveNewObject() {
    if(this.flagStatusChangeMap === 'addNewObject') {
      this.objectService.createObject(this.buttonHouseList[this.indexListAddChange]).subscribe((res) => {
        this.buttonHouseList[this.indexListAddChange].name = res.name
        console.log(`Objet created and add to DB. ID: ${res.name}`)
      })
      this.flagStatusChangeMap = 'non'
    }
    if(this.flagStatusChangeMap === 'changeObject') {
      console.log(this.buttonHouseList[this.indexListAddChange])
      this.objectService.updateObject(this.buttonHouseList[this.indexListAddChange]).subscribe(() => {
        console.log('Objet changes and update in DB')
      })
      this.flagStatusChangeMap = 'non'
    }
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
      this.unFillReserveContainer()
    }

  }
  deleteObject() {
    this.buttonHouseList = this.buttonHouseList.filter(element => {
      if(element.name !== this.buttonHouseList[this.indexListAddChange].name){
        return element
      }
      else{
        this.objectService.deleteObject(element.name).subscribe(()=>{
          console.log('Delete this object')})
      }
    })
    this.flagStatusChangeMap = 'non'

  }
  findClickObject(clickObj: ButtonHouse){
    for (let i = 0; i < this.buttonHouseList.length; ++i){
      if(this.buttonHouseList[i].name === clickObj.name) {
        return i
      }
    }
    return 0
  }
  settingObject() {
    this.flagAdditionalSetting = true
  }
  selectObjectOnMap(object: ButtonHouse) {
    if(this.flagStatusChangeMap === 'waitClickForObject' || this.flagStatusChangeMap === 'changeObject'){
      this.indexListAddChange = this.findClickObject(object)
      this.fillReserveContainer()
      this.flagStatusChangeMap = 'changeObject'
    }
    else if(this.flagStatusChangeMap === 'non'){
      //this.showModel(object)
    }
  }

  ChangeObjectOnMap() {
    this.flagStatusChangeMap = 'waitClickForObject'
  }
  fillReserveContainer() {
    this.reservSaveObject.type = this.buttonHouseList[this.indexListAddChange].type
    this.reservSaveObject.numObj = this.buttonHouseList[this.indexListAddChange].numObj
    this.reservSaveObject.comfort = this.buttonHouseList[this.indexListAddChange].comfort
    this.reservSaveObject.occupied = this.buttonHouseList[this.indexListAddChange].occupied
    this.reservSaveObject.numberPlaces = this.buttonHouseList[this.indexListAddChange].numberPlaces
    this.reservSaveObject.size.width = this.buttonHouseList[this.indexListAddChange].size.width
    this.reservSaveObject.size.height = this.buttonHouseList[this.indexListAddChange].size.height
    this.reservSaveObject.position.left = this.buttonHouseList[this.indexListAddChange].position.left
    this.reservSaveObject.position.top = this.buttonHouseList[this.indexListAddChange].position.top
    this.reservSaveObject.position.rotation = this.buttonHouseList[this.indexListAddChange].position.rotation
    this.reservSaveObject.style.change = this.buttonHouseList[this.indexListAddChange].style.change
    this.reservSaveObject.style.display = this.buttonHouseList[this.indexListAddChange].style.display
    this.reservSaveObject.style.background = this.buttonHouseList[this.indexListAddChange].style.background
    this.reservSaveObject.text = this.buttonHouseList[this.indexListAddChange].text
    this.reservSaveObject.color = this.buttonHouseList[this.indexListAddChange].color
    this.reservSaveObject.fontSize = this.buttonHouseList[this.indexListAddChange].fontSize
    this.reservSaveObject.img = this.buttonHouseList[this.indexListAddChange].img
  }
  unFillReserveContainer() {
    this.buttonHouseList[this.indexListAddChange].type = this.reservSaveObject.type
    this.buttonHouseList[this.indexListAddChange].numObj = this.reservSaveObject.numObj
    this.buttonHouseList[this.indexListAddChange].comfort = this.reservSaveObject.comfort
    this.buttonHouseList[this.indexListAddChange].occupied = this.reservSaveObject.occupied
    this.buttonHouseList[this.indexListAddChange].numberPlaces = this.reservSaveObject.numberPlaces
    this.buttonHouseList[this.indexListAddChange].size.width = this.reservSaveObject.size.width
    this.buttonHouseList[this.indexListAddChange].size.height = this.reservSaveObject.size.height
    this.buttonHouseList[this.indexListAddChange].position.left = this.reservSaveObject.position.left
    this.buttonHouseList[this.indexListAddChange].position.top = this.reservSaveObject.position.top
    this.buttonHouseList[this.indexListAddChange].position.rotation = this.reservSaveObject.position.rotation
    this.buttonHouseList[this.indexListAddChange].style.change = this.reservSaveObject.style.change
    this.buttonHouseList[this.indexListAddChange].style.display = this.reservSaveObject.style.display
    this.buttonHouseList[this.indexListAddChange].style.background = this.reservSaveObject.style.background
    this.buttonHouseList[this.indexListAddChange].text = this.reservSaveObject.text
    this.buttonHouseList[this.indexListAddChange].color = this.reservSaveObject.color
    this.buttonHouseList[this.indexListAddChange].fontSize = this.reservSaveObject.fontSize
    this.buttonHouseList[this.indexListAddChange].img = this.reservSaveObject.img
  }
}
