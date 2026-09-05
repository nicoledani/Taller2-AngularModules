import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovielistRoutingModule } from './movielist-routing-module';
import { MovielistComponent } from './movielist.component';


@NgModule({
  declarations: [
    MovielistComponent
  ],
  imports: [
    CommonModule,
    MovielistRoutingModule
  ]
})
export class MovielistModule { }
