import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RestrictionsCarRoad} from './models/RestrictionsCarRoad';
@Injectable()
export class HomeService {
    private url= 'http://localhost:8080/plateNumberServer/webresources/com.platenumber.models.restrictionaday';
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) {
        this.headers.append('Content-Type', 'text/plain');
    }
    getValidation(digit,date):Promise<RestrictionsCarRoad> {
        const url = `${this.url}/validateNumberPlate/${digit}/${date}`;
        return this.http.get<any>(url, {headers:  this.headers}).toPromise().then(res=>{
            console.log(res);
            return res;
        }).catch(this.handleError);
    }

   
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
