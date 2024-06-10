import { Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

export const adminRoutes: Route[] = [
  { path: '', component: AdminComponent },
  {
    path: 'products',
    // loadChildren: () =>
    //   import('./admin-products/admin-products.component').then(
    //     (m) => m.AdminProductsComponent
    //   ),
    component: AdminProductsComponent
  },
];
