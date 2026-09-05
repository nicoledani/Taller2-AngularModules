import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de películas.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con las películas, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-movielist></app-movielist>
 * ```
 */
@Component({
  selector: 'app-movielist',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class MovielistComponent { }