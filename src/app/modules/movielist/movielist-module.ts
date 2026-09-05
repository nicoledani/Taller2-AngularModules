import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { CardsMovielistComponent } from './components/cards-movielist/cards-movielist.component';
import { ListMovielistComponent } from './pages/list-movielist/list-movielist.component';
import { MovielistRoutingModule } from './movielist-routing-module';
import { MovielistComponent } from './movielist.component';

@NgModule({
  declarations: [
    ListMovielistComponent,
    CardsMovielistComponent,
    MovielistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovielistRoutingModule
  ]
})
export class MovielistModule { }