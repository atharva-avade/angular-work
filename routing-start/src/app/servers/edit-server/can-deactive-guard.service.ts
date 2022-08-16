import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate{
    canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean ;   //this method should not take any arguments but in the end it should return an observable

}
export class CanDecativeGurad implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return component.canDeactivate();
    }
 
}