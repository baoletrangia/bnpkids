import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('@bpkids/admin').then((c) => c.adminRoutes),
  },
];
