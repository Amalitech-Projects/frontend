import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../constants/api.base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register, Success, VerifiedUser, loginDetails } from '../constants/types/data.types';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  signUp(formData: Register) {
    return this.http.post<Success>(`${API_BASE_URL}/auth/signup`, formData);
  }

  login(formData: loginDetails) {
    return this.http.post<VerifiedUser>(`${API_BASE_URL}/auth/login`, formData);
  }
  // verifyEmail(user: Verify) {
  //   return this.http.post<VerifiedUser>(`${API_BASE_URL}/auth/verify`, user);
  // }
  

}
