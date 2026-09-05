import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Libros } from '../interfaces/libros.interfaces';
import { LIBROS } from '../../../core/config/libros.config';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  getLibros(): Observable<Libros[]>{
    return of(LIBROS);
  }
}
