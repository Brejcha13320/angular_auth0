import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  usuario:any = {};
  constructor( public authService:AuthService) {
    this.authService.user$.subscribe(data=>{
      console.log("data: "+ data);
    });
    console.log("usuario: " + this.usuario);
    console.log("auth: " + this.authService.user$);
   }

  ngOnInit(): void {
  }



}
