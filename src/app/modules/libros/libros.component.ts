import { Component } from '@angular/core';

/**
 * Componente contenedor de la seccion de libros
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los libros, mostrando sus componentes hijos dentro del '<router-outlet>'
 */
@Component({
  selector: 'app-libros.component',
  standalone: false,
  template: '<router-outlet></router-outlet>',
})
export class LibrosComponent {

}
