import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokelistComponent } from './pages/list-pokelist/list-pokelist.component';

const routes: Routes = [
  {
    path: 'list-pokelist',
    component: ListPokelistComponent
  },
  {
    path: '**',
    redirectTo: 'list-pokelist'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokelistRoutingModule { }