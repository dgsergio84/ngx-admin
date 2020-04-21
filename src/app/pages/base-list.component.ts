import { Component, OnInit, Inject } from '@angular/core';
import { ImprovedServerDataSource } from '../@core/utils/improved-server.data-source';
import { AuthService } from '../@auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ServerSourceConf } from 'ng2-smart-table/lib/data-source/server/server-source.conf';

@Component( {
    selector: 'ngx-base-list-component',
    template: `
      <p>
          ngx-base-list-component works!
      </p>
  `,
} )
export class BaseListComponent {

    selectedReg: any;

    source: ImprovedServerDataSource;
    sourceConf: ServerSourceConf;

    settings: any = {
        // mode: 'external',
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        actions: {
            columnTitle: 'Acciones',
            add: false,
            edit: false,
            delete: false,
        },
        noDataMessage: 'No se encontraron datos.',
        /* attr: {
            id: 'nominas',
        }, */
        sort: false,
        columns: {
        },
        pager: {
            perPage: 25,
            display: true,
        },
    };

    constructor( protected authService: AuthService,
        protected http: HttpClient, @Inject(String) protected endPoint: string ) {

        this.sourceConf = new ServerSourceConf( {
            endPoint: `${this.endPoint}`,
            dataKey: 'content',
            totalKey: 'totalElements',
            pagerPageKey: 'page',
            pagerLimitKey: 'size',
            filterFieldKey: '#field#',
            sortFieldKey: 'sort',
        } );
        this.source = new ImprovedServerDataSource( authService, this.http, this.sourceConf );

    }

    rowSelect( event, itemName: string ) {
        this.selectedReg = event.data;
        localStorage.removeItem( itemName );
        localStorage.setItem( itemName, JSON.stringify( this.selectedReg ) );
    }

}
