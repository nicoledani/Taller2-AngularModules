import { Component, inject } from '@angular/core';
import { Movie } from '../../interfaces/movielist.interface';
import { MovielistService } from '../../services/movielist.service';

/**
 * Componente contenedor de películas.
 *
 * Se utiliza para gestionar y mostrar un listado de películas
 * utilizando el componente `CardsMovielistComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `MovielistService`
 * para obtener las películas desde la Studio Ghibli API y pasarlas
 * al componente de cards.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-movielist.component></app-list-movielist.component>
 * ```
 */
@Component({
  selector: 'app-list-movielist.component',
  template: `<app-cards-movielist [movies]="movies" ></app-cards-movielist>`,
  standalone: false,
})
export class ListMovielistComponent {
  /**
   * Listado de películas obtenidas desde el servicio.
   * @type {Movie[]}
   */
  movies: Movie[] = [];

  /**
   * Servicio para obtener las películas.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private movielistService = inject(MovielistService);

  /**
   * Inicializa el componente y carga las películas.
   * @remarks
   * Se suscribe al método `getAllMovies()` del servicio y
   * asigna los datos recibidos a la propiedad `movies`.
   */
  ngOnInit(): void {
    this.movielistService.getAllMovies().subscribe({
      next: (movies) => (this.movies = movies),
      error: (error) => console.error(error),
    });
  }
}