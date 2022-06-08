import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export class AuthInterseptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interseptor: ',req)

    const cloned = req.clone({
      headers: req.headers.append('testNewCustomHeader', 'value-my')
    })
    return next.handle(req)

  }
}
