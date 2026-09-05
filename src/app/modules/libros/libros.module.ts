import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './pages/libros/libros.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    LibrosComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule
  ]
})
export class LibrosModule { }
