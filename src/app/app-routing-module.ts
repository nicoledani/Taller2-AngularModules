import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokelist',
    loadChildren: () => import('./modules/pokelist/pokelist-module').then((m) => m.PokelistModule),
  },
  {
    path: '**',
    redirectTo: 'pokelist',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
