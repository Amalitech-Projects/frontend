import { HttpContextToken, HttpHeaders } from "@angular/common/http";

export const API_BASE_URL : string = "http://localhost:4001";
export const API_BASE_URL_OAUTH : string = "http://localhost:4008";
export const API_BASE_URL_CART : string = "http://localhost:4006";
export const API_BASE_URL_AUTH : string = "http://localhost:4003";
export const API_BASE_URL_TRAVEL : string = "http://localhost:4005";

export const NO_AUTH = new HttpContextToken<boolean>(() => false);

