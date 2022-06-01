import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondExampleComponent } from './second-example.component';

const routes: Routes = [{ path: '', component: SecondExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondExampleRoutingModule { }
