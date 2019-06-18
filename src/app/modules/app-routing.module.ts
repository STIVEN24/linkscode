import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { IndexComponent } from '../components/index/index.component';
// 

// guards

// 

const routes: Routes = [
  {path: '**', component: IndexComponent },
  { path: ':tokenValidate', component: IndexComponent },
  { path: 'game', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }