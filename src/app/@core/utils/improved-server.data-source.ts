import { ServerDataSource } from 'ng2-smart-table';
import { AuthService } from '../../@auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerSourceConf } from 'ng2-smart-table/lib/data-source/server/server-source.conf';

export class ImprovedServerDataSource extends ServerDataSource {

    constructor(private authService: AuthService, protected http: HttpClient, conf: ServerSourceConf | {} = {}) {
        super(http, conf);
      }

      requestElements(): Observable<any> {
          const httpheaders = new HttpHeaders().set('Accept', 'application/json')
          .set('Authorization', `Bearer ${this.authService.getAccessToken()}`);

        const httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, {headers: httpheaders, params: httpParams, observe: 'response' });
      }

    addPagerRequestParams( httpParams: HttpParams ): HttpParams {
        if ( this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage'] ) {
            httpParams = httpParams.set( this.conf.pagerPageKey, this.pagingConf['page'] + ( -1 ) );
            httpParams = httpParams.set( this.conf.pagerLimitKey, this.pagingConf['perPage'] );
        }
        return httpParams;
    }

}
