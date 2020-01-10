import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'events',
  //   loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  // }
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
