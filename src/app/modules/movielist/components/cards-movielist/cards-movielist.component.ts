import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movielist.interface';

/**
 * Componente de cards de películas.
 *
 * Se utiliza para mostrar un listado de películas mediante tarjetas
 * visuales, donde la **imagen** (póster) es el elemento principal de
 * cada card, acompañada del título y el año de estreno.
 *
 * @remarks
 * Este componente recibe las películas desde un componente padre
 * a través del Input `movies` y únicamente se encarga de su
 * representación visual.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-cards-movielist [movies]="moviesList"></app-cards-movielist>
 * ```
 */
@Component({
  selector: 'app-cards-movielist',
  templateUrl: './cards-movielist.component.html',
  standalone: false,
})
export class CardsMovielistComponent {
  /**
   * Listado de películas que se mostrarán en las cards.
   * @type {Movie[]}
   * @remarks
   * Este Input permite pasar un arreglo de películas desde un componente padre,
   * generalmente `ListMovielistComponent`. Cada película debe cumplir la interfaz `Movie`.
   */
  @Input() movies: Movie[] = [];
}