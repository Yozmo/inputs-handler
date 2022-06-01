import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdExampleComponent } from './third-example.component';

const routes: Routes = [{ path: '', component: ThirdExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdExampleRoutingModule { }
