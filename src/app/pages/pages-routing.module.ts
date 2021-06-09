import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
      },

      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'practiques',
        loadChildren: () => import('./practiques/practiques.module').then( m => m.PractiquesPageModule)
      },
      {
        path: 'categoriees',
        loadChildren: () => import('./categoriees/categoriees.module').then( m => m.CategorieesPageModule)
      },
      {
        path: 'avout',
        loadChildren: () => import('./avout/avout.module').then( m => m.AvoutPageModule)
      },

    ]
  },
  
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class PagesPageRoutingModule { }
