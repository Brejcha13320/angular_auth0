import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

//RUTAS
import { APP_ROUTING } from './app.routes';

//AUTH
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AuthModule.forRoot({
      domain: 'dev-z-c3lsth.us.auth0.com',
      clientId: 'K0YSbTXdmSx6qVALSZeL3bvmzLnmMPsr'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
