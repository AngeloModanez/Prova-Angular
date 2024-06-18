import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { TiposComponent } from './tipos/tipos.component';

const routes: Routes = [
  { path: 'contatos', component: ContatosComponent },
  { path: 'tipos', component: TiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
