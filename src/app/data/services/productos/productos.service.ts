import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:3307/api/productos';

  constructor(private http:HttpClient) { }
      public getProductsWithCategory(id:number) {
        return this.http.get(`${this.url}${id}`)
      }

      public deleteProducto(id:number) {
        return this.http.delete(`${this.url}${id}`)
      }


  }

