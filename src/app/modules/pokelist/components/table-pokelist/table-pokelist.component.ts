import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokelist.interface';

/**
 * Componente de tabla de pokemones.
 *
 * Se utiliza para mostrar un listado de pokemones en una tabla,
 * mostrando información como id, nombre y la imagen (sprite)
 * de cada pokemon.
 *
 * @remarks
 * Este componente recibe los pokemones desde un componente padre
 * a través del Input `pokemons` y únicamente se encarga de su
 * representación visual.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-pokelist [pokemons]="pokemonsList"></app-table-pokelist>
 * ```
 */
@Component({
  selector: 'app-table-pokelist',
  templateUrl: './table-pokelist.component.html',
  standalone: false,
})
export class TablePokelistComponent {
  /**
   * Listado de pokemones que se mostrarán en la tabla.
   * @type {Pokemon[]}
   * @remarks
   * Este Input permite pasar un arreglo de pokemones desde un componente padre,
   * generalmente `ListPokelistComponent`. Cada pokemon debe cumplir la interfaz `Pokemon`.
   */
  @Input() pokemons: Pokemon[] = [];
}