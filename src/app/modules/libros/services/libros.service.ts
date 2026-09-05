import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Libros } from '../interfaces/libros.interfaces';
import { LIBROS } from '../../../core/config/libros.config';

/**
 * Servicio para gestionar libros
 * Se encarga de proporcionar metodos para obtener los libros en la 
 * aplicacion
 * Devuelve un listado de libros de ejemplo definidos en 'LIBROS'
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los libros
 */
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  /**
   * Obtiene todos los libros disponibles
   * @returns Observable con el listado de libros ('Libros[]')
   */
  getLibros(): Observable<Libros[]>{
    return of(LIBROS);
  }
}
