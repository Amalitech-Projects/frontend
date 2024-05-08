import { Injectable } from '@angular/core';
import { API_BASE_URL, API_BASE_URL_TEST_LOGIN } from '../constants/api.base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register, Success, VerifiedUser, loginDetails } from '../constants/types/data.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUp(formData: Register) {
    return this.http.post<Success>(`${API_BASE_URL}/api/v1/auth/signup`, formData);
  }

  login(formData: loginDetails) {
    return this.http.post<VerifiedUser>(`${API_BASE_URL_TEST_LOGIN}/api/v1/auth/login`, formData);
  }
  
  test() {
    return this.http.get<String>(`${API_BASE_URL}/api/v1/request-service/`);
  }
  // verifyEmail(user: Verify) {
  //   return this.http.post<VerifiedUser>(`${API_BASE_URL}/auth/verify`, user);
  // }
  

}
