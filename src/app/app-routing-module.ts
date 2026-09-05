import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movielist',
    loadChildren: () => import('./modules/movielist/movielist-module').then(m => m.MovielistModule)
  },
  {
    path: '**',
    redirectTo: 'movielist'
    path: "libros",
    loadChildren: () => import('./modules/libros/libros.module').then((m) => m.LibrosModule),
  },
  {
    path: '**',
    redirectTo: 'libros'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }