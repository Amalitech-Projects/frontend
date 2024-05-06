import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../../constants/api.base';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http : HttpClient) { }

  getRoundTripFlight ( body : object){
    return this.http.post(API_BASE_URL + "/api/v1/request-service/flights", body);
  }

  getAiportCode( keyword : string){
    return this.http.post(API_BASE_URL + "/api/v1/request-servie/airports", keyword);
  }

}
