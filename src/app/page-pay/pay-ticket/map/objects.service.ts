import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ButtonHouse, FbAddResponse} from "./interfases";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: "root"})
export class ObjectsService {
  constructor(private http: HttpClient) {}

  createObject(newObject: ButtonHouse): Observable<ButtonHouse>{
    return this.http.post<ButtonHouse>(`${environment.fbDbObjectPayPlaces}/pay/map/object.json`, newObject)
      .pipe(map((response: FbAddResponse)=>{
        return {...newObject, name: response.name}
      }))

  }
  getAllObject(): Observable<ButtonHouse[]>{
    return this.http.get(`${environment.fbDbObjectPayPlaces}/pay/map/object.json`)
      .pipe(map((response:{[key: string]: any} )=>{
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            name: key
          }))
      }))
  }
  deleteObject(id: string):Observable<void>{
    return this.http.delete<void>(`${environment.fbDbObjectPayPlaces}/pay/map/object/${id}.json`)
  }
  updateObject(object: ButtonHouse): Observable<ButtonHouse>{
    return this.http.patch<ButtonHouse>(`${environment.fbDbObjectPayPlaces}/pay/map/object/${object.name}.json`, object)
  }
}
