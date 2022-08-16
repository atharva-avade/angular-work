import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import {ServersService}from '../servers.service'
interface Server{
    id:number,
    name:string,
    status:string,
}
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverservice:ServersService){}
 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        
       return this.serverservice.getServer(+route.params['id'])         //this is the easiest way of using a resolver which will do loading of our data in advance
    }

    

}