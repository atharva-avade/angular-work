import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
//import { url } from "inspector";
import { Observable } from "rxjs";
//import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
        const modifiedRequest=req.clone({headers:req.headers.append('Auth','xyz')}) //as req is immutable object cannot overwrite it directly so we have to first clone it and then overite
     //   return next.handle(req)
        return next.handle(modifiedRequest)
}}