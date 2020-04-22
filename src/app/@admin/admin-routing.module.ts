import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
    component: AdminComponent,

    children: [
      { path: 'users',
        component: UsersComponent
      },
    ],
    
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
