import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { SharedModule } from '../shared/shared-module';
import { ListLibrosComponent } from './pages/list-libros/list-libros.component';
import { TableLibrosComponent } from './components/table-libros/table-libros.component';
import { LibrosComponent } from './libros.component';


@NgModule({
  declarations: [
    ListLibrosComponent,
    TableLibrosComponent,
    LibrosComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ]
})
export class LibrosModule { }
