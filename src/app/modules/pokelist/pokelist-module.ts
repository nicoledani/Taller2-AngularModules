import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TablePokelistComponent } from './components/table-pokelist/table-pokelist.component';
import { ListPokelistComponent } from './pages/list-pokelist/list-pokelist.component';
import { PokelistRoutingModule } from './pokelist-routing-module';
import { PokelistComponent } from './pokelist.component';

@NgModule({
  declarations: [
    ListPokelistComponent,
    TablePokelistComponent,
    PokelistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokelistRoutingModule
  ]
})
export class PokelistModule { }