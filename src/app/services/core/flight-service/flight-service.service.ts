import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, API_BASE_URL_CART, API_BASE_URL_TRAVEL } from '../../constants/api.base';
import { Observable } from 'rxjs';
import { keyword } from '../../constants/types/data.types';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http : HttpClient, private auth : AuthService) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type' : `application/json`,
    }); 
  }

   requestOptions = {
    headers: this.getHeaders(),
  };


  getRoundTripFlight ( body : object){
    return this.http.post(API_BASE_URL + "/api/v1/request-service/multiple-flights", body, this.requestOptions);
  }

  getAiportCode( keyword : keyword){
    return this.http.post(API_BASE_URL_TRAVEL + "/api/v1/request-service/airports", keyword, this.requestOptions );
  }
 
  getTest(){
    return this.http.get(API_BASE_URL + "/api/v1/request-service/" );
  }

  getCart(){
    return this.http.get(API_BASE_URL_CART + `/api/v1/cart/user/?userId=${this.auth.getUser()?.id}`)
  }
  
  getCartAll(){
    return this.http.get(API_BASE_URL_CART + `/api/v1/cart/all`)
  }

  getUserd<T>(uri: string, id: String): Observable<T> { 
    return this.http.get<T>(`${API_BASE_URL}/${uri}/${id}`, { headers: this.getHeaders() });
  }

}
