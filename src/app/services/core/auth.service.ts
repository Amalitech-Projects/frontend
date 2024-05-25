import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticatedUser, Register, Success, VerifiedUser, callbackRequest, LoginDetails, VerifyEmail } from '../constants/types/data.types';
import { API_BASE_URL, API_BASE_URL_AUTH, API_BASE_URL_OAUTH } from '../constants/api.base';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5kaXQuYWxhYmlAYW1hbGl0ZWNoLmNvbSIsImlhdCI6MTcxNjIwMDg5OCwiZXhwIjoxNzE2MjAyNjk4fQ.E7AFERnNBYlRkmhLAP5bv5j7uEl0mwcCjwugXxgUIno';

  headersWithJwt! : HttpHeaders;
  headersWithoutJwt! : HttpHeaders;

  constructor(private http : HttpClient) {
     this.headersWithJwt = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
     
    this.headersWithoutJwt = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   }


  signUp(formData: Register) {
    return this.http.post<Success>(`${API_BASE_URL_AUTH}/api/v1/auth/register`, formData);
  }

  login(formData: LoginDetails) {
    return this.http.post<VerifiedUser>(`${API_BASE_URL_AUTH}/api/v1/auth/login`, formData);
  }
  
  verifyEmail(formData: VerifyEmail) {
    return this.http.post<VerifiedUser>(`${API_BASE_URL_AUTH}/api/v1/auth/verify-email`, formData);
  }

  googleOAuth() {
    return this.http.get<VerifiedUser>(`${API_BASE_URL_OAUTH}/api/v1/oauth/login/oauth/google`);
  }
  
  googleCallBackRequest(formData : callbackRequest){
  // Make the HTTP GET request with the parameters
  return this.http.post<callbackRequest>(`${API_BASE_URL_OAUTH}/api/v1/oauth/auth/callback`, formData);
  }

  // Sessions Service

  
  saveUserAndToken(user: AuthenticatedUser, token: string): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    sessionStorage.setItem('token', token);
  }

  getUser(): AuthenticatedUser | null {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  clearSession(): void {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
  }

}
