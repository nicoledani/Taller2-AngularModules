import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLibrosComponent } from './pages/list-libros/list-libros.component';

const routes: Routes = [
  {
    path: 'list-libros',
    component: ListLibrosComponent
  },
  {
    path: '**',
    redirectTo: 'list-libros'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
