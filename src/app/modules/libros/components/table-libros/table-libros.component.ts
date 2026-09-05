import { Component, Input } from '@angular/core';
import { CategoriaLibro, Libros } from '../../interfaces/libros.interfaces';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

/**
 * Componente de tabla de productos
 * Se utiliza para mostrar un listado de productos en una tabla, mostrando
 * informacion como titulo, autor, año de publicacion, paginas y un badge visual 
 * que indica la categoria del libro
 * 
 * @remarks
 * Este componente recibe los libros desde un componente padre a traves
 * del Input 'libros' y utiliza el mapeo 'categoryMap' para asignar
 * colores a los badge segun su categoria
 */
@Component({
  selector: 'app-table-libros',
  standalone: false,
  templateUrl: './table-libros.component.html',
})
export class TableLibrosComponent {
    /**
   * Listado de libros que se mostrarán en la tabla.
   * @type {Libros[]}
   * @remarks
   * Este Input permite pasar un array de libros desde un componente padre,
   * generalmente `ListLibrossComponent`. Cada libro debe cumplir la interfaz `Libros`.
   */
  @Input() libros: Libros[] = [];
  /**
   * Mapeo de categoria de libros a tipos de Badge
   * Esto permite que en la tabla cada libro tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<CategoriaLibro, BadgeType> = {
    'Novela': 'primary',
    'Drama': 'danger',
    'Romance': 'success',
    'Suspenso': 'warning'
  }
}
