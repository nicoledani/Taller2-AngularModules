import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de pokemones.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los pokemones, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-pokelist></app-pokelist>
 * ```
 */
@Component({
  selector: 'app-pokelist',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class PokelistComponent { }