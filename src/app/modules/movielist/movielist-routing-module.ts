import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovielistComponent } from './pages/list-movielist/list-movielist.component';

const routes: Routes = [
  {
    path: 'list-movielist',
    component: ListMovielistComponent
  },
  {
    path: '**',
    redirectTo: 'list-movielist'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovielistRoutingModule { }