import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseListComponent } from '../../pages/base-list.component';
import { AuthService } from '../../@auth/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseListComponent implements OnInit {

  constructor( protected authService: AuthService,
    protected http: HttpClient ) {
      super( authService, http, `${environment.apiEndpoint.urlBase}:${environment.apiEndpoint.puerto}/personas/users` );

      this.settings.columns = {
        /* id: {
            title: 'ID',
            width: '5%',
            filter: false,
            sort: false,
            type: 'string',
        }, */
        firstName: {
            title: 'Nombre',
            width: '30%',
            filter: false,
            type: 'string',
            sort: false,
        },
        lastName: {
            title: 'Apellido 1',
            width: '30%',
            filter: false,
            sort: false,
            type: 'string',
        },
        /* ape2: {
            title: 'Apellido 2',
            width: '15%',
            filter: true,
            sort: false,
            type: 'string',
        },*/
        email: {
            title: 'Correo',
            width: '40%',
            filter: false,
            type: 'string',
            sort: false,
        },
        /* curp: {
          title: 'CURP',
            width: '15%',
            filter: true,
            type: 'string',
            sort: false,
        } */
      };
      this.settings.pager = {
            perPage: 5,
            display: true,
      };

     }

  ngOnInit(): void {
  }

  rowSelect( event: any ) {
    super.rowSelect( event, 'user' );
  }

}
