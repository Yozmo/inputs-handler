import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'second-example',
    loadChildren: () => import('./second-example/second-example.module').then(m => m.SecondExampleModule)
  },
  { path: 'third-example', loadChildren: () => import('./third-example/third-example.module').then(m => m.ThirdExampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
