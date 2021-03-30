import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map, find } from 'rxjs/operators';
//import { ConfigService } from './config.service';
//  import { latestMsgs } from '../../../mocks/';

import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

//import { CoreService } from './core.service';
//import { ErrorService } from './error.service';

@Injectable()
export class HttpService {
	constructor(
		private httpClient: HttpClient,
		//private configService: ConfigService,
		//private errorService: ErrorService
	) { }

/*	get<T>(
		url: string,
		baseUrl: string = "http://localhost/webAccuweather/api",
		params: HttpParams = new HttpParams()
	) {
		if (baseUrl == '') baseUrl = "http://localhost/webAccuweather/api";
		//this.spinnerService.show();
		return (
			this.httpClient
				.get<T>(`${baseUrl}${url}`, { params: params }).pipe(
					// .delay(500)
					retry(3), // optionally add the retry
					catchError((err: HttpErrorResponse) => {
						console.log(err);
						return Observable.throw('');
					})
				)
		);
	}

	post<T>(url: string, data: any) {
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json; charset=utf-8');
		//this.spinnerService.show();
		return this.httpClient
			.post<T>(`${this.configService.getConfiguration().webApiBaseUrl}${url}`, JSON.stringify(data), {
				headers: headers
			}).pipe(
				retry(3), // optionally add the retry
				catchError((err: HttpErrorResponse) => {
					this.errorService.handleError(err);
					return Observable.throw('');
				})
			)
	}

	put<T>(url: string, data: any) {
		//this.spinnerService.show();
		return (
			this.httpClient
				.put<T>(`${this.configService.getConfiguration().webApiBaseUrl}${url}`, data).pipe(
					// .delay(500)
					retry(3), // optionally add the retry
					catchError((err: HttpErrorResponse) => {
						this.errorService.handleError(err);
						return Observable.throw('');
						// ...optionally return a default fallback value so app can continue (pick one)
						// which could be a default value
						// return Observable.of<any>({my: "default value..."});
						// or simply an empty observable
						// return Observable.empty<T>();
					})
				)
		);
	}
    */
}
