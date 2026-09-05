import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  POKEMON_API_URL,
  POKEMON_IMAGE_BASE_URL,
  POKEMON_LIMIT,
} from '../../../core/config/pokelist.config';
import { Pokemon, PokemonApiItem, PokeApiResponse } from '../interfaces/pokelist.interface';

/**
 * Servicio para gestionar pokemones.
 *
 * @remarks
 * Se encarga de consumir la PokéAPI a través de `HttpClient` y de transformar
 * la respuesta cruda (`PokeApiResponse`) en una lista de {@link Pokemon}
 * lista para la vista, aplicando las siguientes reglas de presentación:
 * - El `id` se extrae de la `url` de cada item.
 * - El `name` se capitaliza.
 * - La `image` se construye a partir del CDN oficial de sprites.
 *
 * Está registrado a nivel raíz (`providedIn: 'root'`).
 *
 * @example
 * ```ts
 * const pokelistService = inject(PokelistService);
 * pokelistService.getAllPokemon().subscribe(pokemons => {
 *   console.log(pokemons);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PokelistService {
  /**
   * Cliente HTTP utilizado para consumir la PokéAPI.
   * @remarks
   * Se inyecta mediante la función `inject()` de Angular.
   */
  private http = inject(HttpClient);

  /**
   * Obtiene el listado de pokemones desde la PokéAPI.
   *
   * @returns Observable con un arreglo de pokemones (`Pokemon[]`) listos para la vista.
   *
   * @throws Observable de error si la petición HTTP falla.
   *
   * @example
   * ```ts
   * this.pokelistService.getAllPokemon().subscribe(pokemons => {
   *   this.pokemons = pokemons;
   * });
   * ```
   */
  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<PokeApiResponse>(`${POKEMON_API_URL}?limit=${POKEMON_LIMIT}`).pipe(
      map((response) => response.results.map((item) => this.mapPokemon(item)))
    );
  }

  /**
   * Transforma un item de la PokéAPI en un objeto {@link Pokemon}.
   *
   * @param item - Item crudo devuelto por la PokéAPI.
   * @returns Un pokemon con `id`, `name` capitalizado e `image`.
   *
   * @internal
   */
  private mapPokemon(item: PokemonApiItem): Pokemon {
    const id = this.extractIdFromUrl(item.url);
    return {
      id,
      name: this.capitalize(item.name),
      image: `${POKEMON_IMAGE_BASE_URL}${id}.png`,
    };
  }

  /**
   * Extrae el id numérico de la URL de un pokemon.
   *
   * @param url - URL del detalle del pokemon (p. ej. `.../pokemon/1/`).
   * @returns El id numérico del pokemon.
   *
   * @example
   * ```ts
   * extractIdFromUrl('https://pokeapi.co/api/v2/pokemon/25/'); // 25
   * ```
   *
   * @internal
   */
  private extractIdFromUrl(url: string): number {
    const segments = url.split('/').filter((segment) => segment !== '');
    return Number(segments[segments.length - 1]);
  }

  /**
   * Capitaliza la primera letra de una cadena.
   *
   * @param name - Nombre original en minúsculas.
   * @returns El nombre con la primera letra en mayúscula.
   *
   * @example
   * ```ts
   * capitalize('pikachu'); // 'Pikachu'
   * ```
   *
   * @internal
   */
  private capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}