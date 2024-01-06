import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'character-detail/:id',
    loadComponent: () => import('./pages/character-detail/character-detail.page').then( m => m.CharacterDetailPage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'home2',
    loadComponent: () => import('./pages/home2/home2.page').then( m => m.Home2Page)
  },
  {
    path: 'episodes-detail/:id',
    loadComponent: () => import('./pages/episodes-detail/episodes-detail.page').then( m => m.EpisodesDetailPage)
  },
];
