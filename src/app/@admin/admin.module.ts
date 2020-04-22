import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbAlertModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';

@NgModule({
  declarations: [UsersComponent, AdminComponent, ],
  imports: [
    CommonModule,
    FormsModule, // Can't bind to 'ngModel' since it isn't a known property of 'input'
    
    AdminRoutingModule,

    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,

    Ng2SmartTableModule,
    NbCardModule,
    NbAlertModule,
    NbButtonModule,
  ],
})
export class AdminModule { }
