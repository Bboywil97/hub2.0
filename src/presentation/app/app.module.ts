import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component'; // Asegúrate de importar el componente de Login

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent // Declara el componente de Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de incluir el módulo de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
