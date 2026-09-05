import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './pages/libros/libros.component';
import { SharedModule } from '../shared/shared-module';
import { ListLibrosComponent } from './pages/list-libros/list-libros.component';
import { TableLibrosComponent } from './components/table-libros/table-libros.component';


@NgModule({
  declarations: [
    LibrosComponent,
    ListLibrosComponent,
    TableLibrosComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ]
})
export class LibrosModule { }
