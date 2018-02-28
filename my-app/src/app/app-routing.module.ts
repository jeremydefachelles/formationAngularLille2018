import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'items',  loadChildren: 'app/items/items.module#ItemsModule' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadAllModules}
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
