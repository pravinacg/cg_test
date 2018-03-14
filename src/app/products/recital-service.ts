import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IRecital } from './recital';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 


const headers = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Accept', 'application/json'); 

@Injectable()
export class RecitalService {
    private _reciatlUrl = 'https://jsonplaceholder.typicode.com/comments/';
    constructor(private _http: HttpClient) { }

    getRecitalText1(articlenumber): Observable<IRecital[]> {
        return this._http.get<IRecital[]>(this._reciatlUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getRecitalText(articlenumber: any): Observable<IRecital[]> {
        const endPoint = 'v1/clinic/transmissions';
        const params = new HttpParams()
          .set('id', articlenumber)
        const url = `${this._reciatlUrl}`;
        
        return this._http.get<IRecital[]>(this._reciatlUrl,{ headers: headers, params: params })
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
      } 

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }



    // getProducts(): ITopic[] {
    //     return [
    //         {
    //             "productId": 2,
    //             "productName": "Garden Cart",
    //             "productCode": "GDN-0023",
    //             "releaseDate": "March 18, 2016",
    //             "description": "15 gallon capacity rolling garden cart",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "topics":"xyz",
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //         },
    //         {
    //             "productId": 5,
    //             "productName": "Hammer",
    //             "productCode": "TBX-0048",
    //             "releaseDate": "May 21, 2016",
    //             "description": "Curved claw steel hammer",
    //             "price": 8.9,
    //             "topics":"xyz",
    //             "starRating": 4.8,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    //         },
    //         {
    //             "productId": 10,
    //             "productName": "Video Game Controller",
    //             "productCode": "GMG-0042",
    //             "releaseDate": "October 15, 2015",
    //             "topics":"xyz",
    //             "description": "Standard two-button video game controller",
    //             "price": 35.95,
    //             "starRating": 4.6,
    //             "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    //         }
    //     ];
    // }
}
