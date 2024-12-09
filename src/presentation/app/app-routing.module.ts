import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component'; // Asegúrate de importar el componente de Inventario

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent }, // Ruta para el componente de Login
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventario', component: InventarioComponent }, // Ruta para el componente de Inventario
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
