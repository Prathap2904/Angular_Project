import { Component } from '@angular/core';
import { productService } from '../productService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
products: any[] = [];
filteredProducts: any[] = [];
categories: string[] = [];


selectedCategory = '';
searchText = '';
maxPrice = 1000;


constructor(private productService:productService) {}


ngOnInit(): void {
this.loadProducts();
this.loadCategories();
}


loadProducts() {
this.productService.getProducts().subscribe(res => {
this.products = res;
this.filteredProducts = res;
});
}


loadCategories() {
this.productService.getCategories().subscribe(res => {
this.categories = res;
});
}


filterProducts() {
this.filteredProducts = this.products.filter(p => {
return (
(!this.selectedCategory || p.category === this.selectedCategory) &&
p.price <= this.maxPrice &&
p.title.toLowerCase().includes(this.searchText.toLowerCase())
);
});
}
}
