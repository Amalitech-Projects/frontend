import { HttpContextToken, HttpHeaders } from "@angular/common/http";

export const API_BASE_URL : string = "http://localhost:4001";
export const API_BASE_URL_TEST_LOGIN : string = "http://localhost:4001";

export const NO_AUTH = new HttpContextToken<boolean>(() => false);

export class Headers {
     private getHeaders(): HttpHeaders {
        return new HttpHeaders({
          'Content-Type' : `application/json`
        });
      }
}
  