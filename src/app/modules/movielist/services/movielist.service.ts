import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MOVIE_API_URL } from '../../../core/config/movielist.config';
import { GhibliFilm, Movie } from '../interfaces/movielist.interface';

/**
 * Servicio para gestionar películas.
 *
 * @remarks
 * Se encarga de consumir la Studio Ghibli API a través de `HttpClient` y de
 * transformar la respuesta cruda (`GhibliFilm[]`) en una lista de {@link Movie}
 * lista para la vista, aplicando las siguientes reglas de presentación:
 * - El `title` se toma directamente de la API.
 * - La `image` (póster) se obtiene del campo `image`.
 * - El año de estreno (`releaseDate`) se deriva de `release_date`.
 *
 * Está registrado a nivel raíz (`providedIn: 'root'`).
 *
 * @example
 * ```ts
 * const movielistService = inject(MovielistService);
 * movielistService.getAllMovies().subscribe(movies => {
 *   console.log(movies);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MovielistService {
  /**
   * Cliente HTTP utilizado para consumir la Studio Ghibli API.
   * @remarks
   * Se inyecta mediante la función `inject()` de Angular.
   */
  private http = inject(HttpClient);

  /**
   * Obtiene el listado de películas desde la Studio Ghibli API.
   *
   * @returns Observable con un arreglo de películas (`Movie[]`) listas para la vista.
   *
   * @throws Observable de error si la petición HTTP falla.
   *
   * @example
   * ```ts
   * this.movielistService.getAllMovies().subscribe(movies => {
   *   this.movies = movies;
   * });
   * ```
   */
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<GhibliFilm[]>(MOVIE_API_URL).pipe(
      map((films) => films.map((film) => this.mapMovie(film)))
    );
  }

  /**
   * Transforma una película cruda de la API en un objeto {@link Movie}.
   *
   * @param film - Película cruda devuelta por la Studio Ghibli API.
   * @returns Una película con `id`, `title`, `image` y `releaseDate`.
   *
   * @internal
   */
  private mapMovie(film: GhibliFilm): Movie {
    return {
      id: film.id,
      title: film.title,
      image: film.image,
      releaseDate: film.release_date,
    };
  }
}