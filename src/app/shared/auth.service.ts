import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./interfaces";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {StyleErrorTextDirective} from "../pages-service/login/styleErrorText.directive";
import {LoginComponent} from "../pages-service/login/login.component";

@Injectable({providedIn: 'root'})
export class AuthService{

  authFbMessage: string = ''

  constructor(
    private http: HttpClient
  ) {}

  logIn(user?: User):Observable<any>{
    // this.loginFlag = true
   return  this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(err => this.handlerError(err))
      )

  }
  logOut(){
    //this.authFbMessage = ''
    this.setToken(null)
  }
  get token():string | null{

    // @ts-ignore
    const str: string = localStorage.getItem('fb-token-exp')
    const expDate = new Date(str)
    if( new Date() > expDate){
      this.logOut()
      return null
    }
    return localStorage.getItem('fb-token')
  }
  private setToken(response: any | null){
    if(response){
      const expiresIn: number = +response['expiresIn'] * 1000
      const idToken: string = response['idToken']

      const expDate = new Date(expiresIn + new Date().getTime())

      localStorage.setItem('fb-token', idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
      localStorage.setItem('fb-email', response['email'])

      //console.log(response)
    }
    else{
      localStorage.clear()
    }

  }
  private handlerError(error: HttpErrorResponse){

    const {message} = error.error.error

    if(message == 'EMAIL_NOT_FOUND'){
      this.authFbMessage = 'Неверный eMail адрес'
    } else
    if(message == 'INVALID_PASSWORD'){
      this.authFbMessage = 'Неверный пароль'
    } else
    if(message == 'USER_DISABLED'){
      this.authFbMessage = 'Ваш доступ ограничен администратором сайта'
    }

    return throwError(error)
  }

  isAuthenticated(): boolean {
  return !!this.token
  }

  get nameAuthCurSasion():string | null{
    return localStorage.getItem('fb-email')
  }


}
