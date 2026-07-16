import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portfolio/portfolio').then(m => m.Portfolio)
  },
  {
    path: 'links',
    loadComponent: () => import('./links/links').then(m => m.Links)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
