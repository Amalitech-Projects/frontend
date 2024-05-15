import { HttpContextToken, HttpHeaders } from "@angular/common/http";

export const API_BASE_URL : string = "http://localhost:4001";
export const API_BASE_URL_OAUTH : string = "http://localhost:4008";

export const NO_AUTH = new HttpContextToken<boolean>(() => false);

