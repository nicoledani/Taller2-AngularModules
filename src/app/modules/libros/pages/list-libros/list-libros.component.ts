import { Component, inject } from '@angular/core';
import { Libros } from '../../interfaces/libros.interfaces';
import { LibrosService } from '../../services/libros.service';

/**
 * Componente contenedor de libros
 * Se utiliza para gestionar y mostrar un listado de libros utilizando
 * el componenente 'TableLibrosComponent
 * 
 * @remarks
 * Este componente se encarga de consumir el servicio 'LibrosService'
 * para obtener los libros y pasarlo al componente de tabla
 */
@Component({
  selector: 'app-list-libros.component',
  standalone: false,
  template: '<app-table-libros [libros]="libros"></app-table-libros>',
})
export class ListLibrosComponent {
  /**
   * Listado de libros obtenidos desde el servicio
   * @type {Libros[]}
   */
  libros: Libros[] = [];
  /**
   * Servicio para obtener libros
   * @remarks
   * Se inyecta la funcion 'inject()' de Angular
   */
  private librosService = inject(LibrosService)
  /**
   * Inicializa el componente y carga los libros
   */
  ngOnInit(): void {
    this.librosService.getLibros().subscribe({
      next: (libros) => this.libros = libros,
      error: (error) => console.error(error),
    })
  }
}
