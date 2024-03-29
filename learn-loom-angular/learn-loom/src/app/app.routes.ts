import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', loadChildren: () => import('./pages/index/index.routes').then(m => m.INDEX_ROUTES)}
];
