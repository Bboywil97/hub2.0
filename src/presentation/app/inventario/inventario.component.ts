import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

interface InventoryItem {
  rfid: string;
  articulo: string;
  descripcion: string;
  responsable: string;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  inventoryItems: InventoryItem[] = [
    {
      rfid: 'AR-872350',
      articulo: 'MacBook Pro 💻',
      descripcion: 'Laptop',
      responsable: '1'
    },
    {
      rfid: '#0002',
      articulo: 'iPhone 14 pro 📱',
      descripcion: 'Phone',
      responsable: '2'
    },
    {
      rfid: '#0003',
      articulo: 'Zoom75 ⌨️',
      descripcion: 'Keyboard',
      responsable: '3'
    },
    {
      rfid: '#0004',
      articulo: 'Airpods Pro 🎧',
      descripcion: 'Accessories',
      responsable: '1'
    },
    {
      rfid: '#0005',
      articulo: 'Samsung Galaxy Fold 📱',
      descripcion: 'Phone',
      responsable: '2'
    }
  ];

  currentPage = 1;
  totalPages = 5;

  constructor(private router: Router) {} // Inyecta Router

  ngOnInit(): void {}

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  exportToExcel(): void {
    // Implement Excel export functionality
  }

  exportToPDF(): void {
    // Implement PDF export functionality
  }

  darDeAlta(): void {
    // Implement alta functionality
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']); // Navega al dashboard
  }
}
