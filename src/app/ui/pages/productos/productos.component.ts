import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { GlobalText } from '../../../data/text.js';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { NgFor } from '@angular/common';
import { ProductosService } from '../../../data/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  public idCategoria;
  public nombreCategoria;
  public product: any;

  constructor(
    public globalText: GlobalText,
    public router: Router,
    public productosService: ProductosService
  ) {
    

    const navigability = this.router.getCurrentNavigation();
    if (navigability && navigability.extras && navigability.extras.state) {
      this.idCategoria = navigability.extras.state['categoriaId']; // Cambio aquí
      
      this.nombreCategoria = navigability.extras.state['nombreCategoria'];
      
      this.productosService.getProductsWithCategory(this.idCategoria).subscribe((result) => {
        this.product = result;
      });
    }

  }



  // Método para eliminar un producto por ID
  public eliminarProducto(id: number) {
    this.productosService.deleteProducto(id).subscribe(
      (result) => {
        location.reload()
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
}
