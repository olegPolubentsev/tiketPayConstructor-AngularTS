import {Component, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../shared/interfaces";
import {DynamicComponent} from "../../page-pay/pay-ticket/dynamic/dynamic.component";
import {Title} from "@angular/platform-browser";
import {DynamicMesComponent} from "./dynamic-mes/dynamic-mes.component";
import {animate, state, style, transition, trigger} from "@angular/animations";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('dynamicMes',{read: ViewContainerRef})

  private viewRef: ViewContainerRef
  private componentRef: ComponentRef<DynamicMesComponent>
  form: FormGroup
  flagWindow = false

  constructor(
    public  authServ: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if(this.authServ.isAuthenticated())
      this.router.navigate(['/index'], {
      queryParams: {auth: true}})

    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  showDynamicMesWindow() {
    this.viewRef.clear()

    setInterval(()=>{
      if(this.authServ.authFbMessage !== '' && !this.flagWindow)
      {
        this.flagWindow = true
        this.componentRef = this.viewRef.createComponent(DynamicMesComponent)
        this.componentRef.instance.title = this.authServ.authFbMessage
        this.componentRef.instance.close.subscribe( () =>{                //ожидаем прихода ивента от @Output и обрабатываем
          this.viewRef.clear()
          this.authServ.authFbMessage = ''
          this.flagWindow = false
        })
      }

    },100)
  }

  submitButtonLogin() {
    const user: User = {
      email: this.form.value.userName,
      password: this.form.value.password,
      returnSecureToken: true
    }
    this.authServ.logIn(user)
      .subscribe(() => {
        this.authServ.authFbMessage = 'Вход выполнен успешно'
        this.form.reset()
        this.router.navigate(['/index'], {
          queryParams: {auth: true}
        })
    })
    if(this.authServ.authFbMessage !== 'Вход выполнен успешно'){
      this.showDynamicMesWindow()
    }

  }

  rigistrationSubmit() {
  }
}
