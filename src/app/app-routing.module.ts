import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Presentazione',
    loadChildren: () =>
      import('./modules/presentazione/presentazione.module').then(
        (m) => m.PresentazioneModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'InfoPage',
    loadChildren: () =>
      import('./modules/info-page/info-page.module').then(
        (m) => m.InfoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
