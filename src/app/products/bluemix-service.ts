import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { map } from "rxjs/operators";
import { IRootObject} from './RootObject';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 
import { ITopic } from '../topic/topic';


const headers = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Accept', 'application/json'); 

@Injectable()
export class BlueMixService {
    private _serviceUrl = 'https://demowdscapgemini-servo-relief.mybluemix.net/api';
    private _productUrl = './api/products/products.json';
    constructor(private _http: HttpClient) { }

    
    getTopics(): Observable<ITopic[]> {
        return this._http.get<ITopic[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    
    getSearchData(topicName: any): Observable<IRootObject> {
      
        const endPoint = 'v1/clinic/transmissions';
        const params = new HttpParams()
        .set('natural_language_query', topicName)
        const url = `${this._serviceUrl}`;
        return this._http.get<IRootObject>(this._serviceUrl,{ headers: headers, params: params })
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      } 

    getServiceData(topicName: any): Observable<IRootObject> {
        const endPoint = 'v1/clinic/transmissions';
        const params = new HttpParams()
        .set('query', topicName)
        const url = `${this._serviceUrl}`;
        return this._http.get<IRootObject>(this._serviceUrl,{ headers: headers, params: params })
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      } 

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
   
}
