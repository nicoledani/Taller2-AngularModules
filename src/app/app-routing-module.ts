import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokelist',
    loadChildren: () => import('./modules/pokelist/pokelist-module').then((m) => m.PokelistModule),
  },
  {
    path: 'movielist',
    loadChildren: () =>
      import('./modules/movielist/movielist-module').then((m) => m.MovielistModule),
  },
  {
    path: 'libros',
    loadChildren: () => import('./modules/libros/libros.module').then((m) => m.LibrosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
