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
    path: 'catalogo',
    children: [
      {
        path: '',
        loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
      },
      {
        path: 'detalle/:catalogoId',
        loadChildren: () => import('./catalogo/detail/detail.module').then( m => m.DetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
