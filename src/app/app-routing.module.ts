import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Web3Component } from './web3/web3.component';

const routes: Routes = [
  { path: '', component: Web3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
