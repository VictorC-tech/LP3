import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'confirmar-reserva/:diaria/:hospedagem/:valor',
    loadChildren: () => import('./confirmar-reserva/confirmar-reserva.module').then( m => m.ConfirmarReservaPageModule)
  },
  {
    path: 'reserva/:valor',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
