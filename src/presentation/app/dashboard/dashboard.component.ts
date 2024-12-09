import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName: string = '[Nombre.usuario]';

  menuItems = [
    { icon: 'grid', text: 'Vista Principal', active: true },
    { icon: 'box-seam', text: 'Almacenamiento' },
    { icon: 'truck', text: 'Envíos' },
    { icon: 'graph-up-arrow', text: 'Reports' }
  ];

  supportItems = [
    { icon: 'info-circle', text: 'Ayuda' },
    { icon: 'gear', text: 'Configuraciones' }
  ];

  navLinks = [
    'Trámites',
    'Gobierno',
    'Participa',
    'Transparencia',
    'Gestor de Inventarios'
  ];
}
