import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { Prodservice } from '../prodservice';

@Component({
  selector: 'app-productgrid',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './productgrid.html',
  styleUrls: ['./productgrid.css'],
})
export class Productgrid implements OnInit {

  isBrowser = false;
  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'title' },
    { field: 'brand' },
    { field: 'price' },
    { field: 'rating' },
    { field: 'stock' }
  ];

  constructor(
    private productService: Prodservice,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.productService.getProducts().subscribe({
        next: (res: any) => {
          this.rowData = res.products;
        }
      });
    }
  }
}
