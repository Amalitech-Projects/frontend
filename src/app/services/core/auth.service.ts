import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register, Success, VerifiedUser, callbackRequest, loginDetails } from '../constants/types/data.types';
import { API_BASE_URL, API_BASE_URL_OAUTH } from '../constants/api.base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUp(formData: Register) {
    return this.http.post<Success>(`${API_BASE_URL}/api/v1/auth/signup`, formData);
  }

  login(formData: loginDetails) {
    return this.http.post<VerifiedUser>(`${API_BASE_URL}/api/v1/auth/login`, formData);
  }

  googleOAuth() {
    return this.http.get<VerifiedUser>(`${API_BASE_URL_OAUTH}/api/v1/oauth/login/oauth/google`);
  }
  
  googleCallBackRequest(formData : callbackRequest){
    return this.http.post<VerifiedUser>(`${API_BASE_URL_OAUTH}/api/v1/oauth/auth/callback`, formData);
  }

}
