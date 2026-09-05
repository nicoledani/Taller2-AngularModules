import { Component, Input } from '@angular/core';
import { CategoriaLibro, Libros } from '../../interfaces/libros.interfaces';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-table-libros',
  standalone: false,
  templateUrl: './table-libros.component.html',
})
export class TableLibrosComponent {
  @Input() libros: Libros[] = [];
  categoryMap: Record<CategoriaLibro, BadgeType> = {
    'Novela': 'primary',
    'Drama': 'danger',
    'Romance': 'success',
    'Suspenso': 'warning'
  }
}
