import { Component } from '@angular/core';
import { GlobalText } from '../../../data/text.js';
import { HeaderComponent } from "../../components/header/header.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { UrlNavigateService } from '../../../services/url-navigate.service.js';
import { GlobalUrl } from '../../../data/url.js';
import { FooterComponent } from "../../components/footer/footer.component";
import { NgFor } from '@angular/common';
import { CategoriasService } from '../../../data/services/categorias/categorias.service.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, FooterComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categories:any;
  constructor(
    public globalText: GlobalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: GlobalUrl,
    public categoriasService: CategoriasService
  ) {
    this.categoriasService.getCategorias().subscribe((result)=>{
      this.categories = result
      })
    
  }

  navegateProducts(categoria: any) {
    console.log('Enviando categoria:', categoria); // Verifica que es un solo objeto
    console.log('Categoria ID:', categoria?.id); // Accede a la propiedad 'id' directamente
    console.log('Categoria Nombre:', categoria?.nombre); // Accede a la propiedad 'nombre' directamente
    
    this.urlNavigateService.navegateUrlWhithData(this.globalUrl.products, {
      state: {
        categoriaId: categoria.id,  // Pasa el id correctamente
        nombreCategoria: categoria.nombre  // Pasa el nombre correctamente
      }
    });
  }
}
