import { Component, inject } from '@angular/core';
import { Libros } from '../../interfaces/libros.interfaces';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-list-libros.component',
  standalone: false,
  template: '<app-table-libros></app-table-libros>',
})
export class ListLibrosComponent {
  libros: Libros[] = [];
  private librosService = inject(LibrosService)
  ngOnInit(): void {
    this.librosService.getLibros().subscribe({
      next: (libros) => this.libros = libros,
      error: (error) => console.error(error),
    })
  }
}
