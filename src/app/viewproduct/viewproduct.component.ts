import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent {
  products: Product[] = [];
  constructor(private http:HttpClient)
  {
    this.http.get<Product[]>('http://localhost:5000/api/Product/GetAllProducts').subscribe((res:Product[])=>{
    console.warn(res);
    this.products=res;
  })
  }
  
}
