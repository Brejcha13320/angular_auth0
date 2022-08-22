import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  usuario:any = {};

  constructor( @Inject(DOCUMENT) public document: Document, 
               public authService:AuthService ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginWithRedirect();
  }

  salir(){
    this.authService.logout({ returnTo: this.document.location.origin });
  }

}
