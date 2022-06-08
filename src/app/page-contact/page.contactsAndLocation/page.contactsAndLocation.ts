import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  SimpleChanges,
  DoCheck, OnDestroy
} from '@angular/core'
import {TelFormatPipe} from "../../shared/pipes/tel-format.pipe"
import {Message} from "../../shared/interfaces";


@Component({
  selector: 'app-ContactLocation',
  templateUrl: 'page.contactsAndLocation.html',
  styleUrls: ['page.contactsAndLocation.scss']
})

export class ContactLocation implements OnInit, OnChanges, DoCheck, OnDestroy{

  @ViewChild('titleNameInput') inputNameRef: ElementRef
  @ViewChild('titleTextAreaMessage') inputMessageRef: ElementRef
  @Output() onMessage = new EventEmitter<Message>()

  firstName = ''
  lastName = ''
  email = ''
  tell = ''
  message = ''
  flNoTelMe = false
  flTelegram = false
  flViber = false
  flEmail = true

  firstNameFlagErr = false
  messageFlagErr = false
  tellFlagErr = false

  flagError = false
  errorArray = ['del']
  errorMessageArray = [
    {err: 'firstName', text: '* Имя должно содержать хоть какие-то символы!'},
    {err: 'message', text: '* Текст сообщения должен быть информативным!'},
    {err: 'tell', text: '* Неверный формат телефонного номера'},
    {err: 'email', text: '* Неверный формат eMail адресса'}
  ]
  titleCommentDefault = ''
  arrOutErr = new Array()

  textPlaceholderFirstName = 'Ваше имя...'
  textPlaceholderLastName = 'Фамилия... (необязательно)'
  textPlaceholderEmail = 'eMail... (необязательно)'
  textPlaceholderTell = 'Номер телефона... (необязательно)'

  constructor() {
  }
  ngDoCheck() {
    //console.log('DoCheck')
    //реагирует на любое действие
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }

  ngOnInit() {
    this.arrOutErr.push(this.titleCommentDefault)
    //console.log('onInit')
  }
  ngOnDestroy() {
    //console.log('ngOnDestroy')
  }



  btnContactDataCallback() {
    const messageStr: Message ={
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      tell: this.tell,
      flNoTelMe: this.flNoTelMe,
      flTelegram: this.flTelegram,
      flViber: this.flViber,
      flEmail: this.flEmail,
      message: this.message
    }
    if(this.errorArray.length)
    for(let i = 0; i < this.errorArray.length;++i) {
        switch (this.errorArray[i]) {
          case 'firstName':
            this.inputNameRef.nativeElement.focus()
            break
          case 'message':
            this.inputMessageRef.nativeElement.focus()
            break
        }
      }
    else if(!this.errorArray.length){
      this.onMessage.emit(messageStr)
    }
  }
  checkInputError(key = '')  {
    switch (key) {
      case 'firstName':
        this.errorNameAddDel('firstName', this.firstName);
        break

      case 'message':
        this.errorNameAddDel('message', this.message);
        break

      case 'tell':
        this.errorTellAddDel('tell', this.tell);
        break
    }

    this.errorArray.sort()
    while (this.errorArray[0] === 'del') {
      this.errorArray.shift() //удаляет первый
    }


    this.messageFlagErr = false
    this.firstNameFlagErr = false
    this.tellFlagErr = false

    this.arrOutErr.splice(0,this.arrOutErr.length)
    if(this.errorArray.length > 0) {
      this.flagError = true;
      for(let i = 0; i < this.errorArray.length;++i) {
        const idx = this.errorMessageArray.findIndex(errName => errName.err === this.errorArray[i])
        this.arrOutErr.push(this.errorMessageArray[idx].text)

        switch (this.errorArray[i]) {
          case 'firstName':
            this.firstNameFlagErr = true
            break
          case 'message':
            this.messageFlagErr = true
            break
          case 'tell':
            this.tellFlagErr = true
            break

        }
      }
    }
    else {
      this.flagError = false;
      this.arrOutErr.push(this.titleCommentDefault)
    }
  }
  //====================================================================================================================
  private errorNameAddDel(key: string, field: string){

    if(!field.trim()) {
      const idxErr = this.errorArray.findIndex(err => err === 'del' || err === key)
      if( idxErr >= 0){
        this.errorArray[idxErr] = key
      }
      else this.errorArray.push(key)
    }
    else {
      const idxErr = this.errorArray.findIndex(err => err === key)
      if( idxErr >= 0){
        this.errorArray[idxErr] = 'del'
      }
    }
  }
  private errorTellAddDel(key: string, field: string){

    if(field.length > 0 && field.length < 17) {
      const idxErr = this.errorArray.findIndex(err => err === 'del' || err === key)
      if( idxErr >= 0){
        this.errorArray[idxErr] = key
      }
      else this.errorArray.push(key)
    }
    else {
      const idxErr = this.errorArray.findIndex(err => err === key)
      if( idxErr >= 0){
        this.errorArray[idxErr] = 'del'
      }
    }
  }
}

