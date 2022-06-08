import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

export interface UserPost {
  id?: number,
  name: string
  username: string,
  email: string
}
@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  fetchUser(numGetUsers: number = 0): Observable<UserPost[]> {

    let myParams = new HttpParams()

    myParams = myParams.append('_limit', numGetUsers.toString())
    myParams = myParams.append('_custom', (123456789).toString())

    return this.http.get<UserPost[]>('https://jsonplaceholder.typicode.com/users',{
      params: myParams
    })
  }
  addUser(user: UserPost): Observable<UserPost>{
    return this.http.post<UserPost>('https://jsonplaceholder.typicode.com/users', user, {
      headers: new HttpHeaders({'MyCustomHeader': (123567).toString()
    })
    })
  }
  dellUser(id: number = 0): Observable<void>{
    return this.http.delete<void>('https://jsonplaceholder.typicode.com/users/'+id.toString())
  }
}
