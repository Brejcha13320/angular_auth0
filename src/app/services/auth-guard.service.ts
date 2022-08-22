import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { async, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private authService:AuthService ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

    let authenticated;
    this.authService.isAuthenticated$.subscribe( data=> {
      authenticated = data;
    });

    if(authenticated){
      console.log("Paso el Guard");
      return true;
    } else {
      console.error("Bloqueo el Guard");
      return false;
    }
  }

}
