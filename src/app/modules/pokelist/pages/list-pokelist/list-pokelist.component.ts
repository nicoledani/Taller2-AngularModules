import { Component, inject } from '@angular/core';
import { Pokemon } from '../../interfaces/pokelist.interface';
import { PokelistService } from '../../services/pokelist.service';

/**
 * Componente contenedor de pokemones.
 *
 * Se utiliza para gestionar y mostrar un listado de pokemones
 * utilizando el componente `TablePokelistComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `PokelistService`
 * para obtener los pokemones desde la PokéAPI y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-pokelist.component></app-list-pokelist.component>
 * ```
 */
@Component({
  selector: 'app-list-pokelist.component',
  template: `<app-table-pokelist [pokemons]="pokemons" ></app-table-pokelist>`,
  standalone: false,
})
export class ListPokelistComponent {
  /**
   * Listado de pokemones obtenidos desde el servicio.
   * @type {Pokemon[]}
   */
  pokemons: Pokemon[] = [];

  /**
   * Servicio para obtener los pokemones.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private pokelistService = inject(PokelistService);

  /**
   * Inicializa el componente y carga los pokemones.
   * @remarks
   * Se suscribe al método `getAllPokemon()` del servicio y
   * asigna los datos recibidos a la propiedad `pokemons`.
   */
  ngOnInit(): void {
    this.pokelistService.getAllPokemon().subscribe({
      next: (pokemons) => (this.pokemons = pokemons),
      error: (error) => console.error(error),
    });
  }
}