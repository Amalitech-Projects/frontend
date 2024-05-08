export type loginDetails = {
    email : string;
    password : string;
}

export type keyword ={
  keyword : string
}

export type Register = {
    firstName: string;
    lastName : string;
    email : string;
    password : string;
}

export type loadingStatus = {
   onloading : boolean;
   complete : boolean;
}

export type Success = {
    message: string;
  };
  export type Failure = {
    errorMessage: string;
  };

  export type VerifiedUser = {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };

 export  interface DepartureDateTimeRange {
    date: string;
    time: string;
}

export interface OriginDestination {
    id: string;
    originLocationCode: string;
    destinationLocationCode: string;
    departureDateTimeRange: DepartureDateTimeRange;
}

export interface Traveler {
    id: string;
    travelerType: string;
    fareOptions: string[];
}

export interface CabinRestriction {
    cabin: string;
    coverage: string;
    originDestinationIds: string[];
}

export interface CarrierRestrictions {
    excludedCarrierCodes: string[];
}

export interface FlightFilters {
    cabinRestrictions: CabinRestriction[];
    carrierRestrictions: CarrierRestrictions;
}

export interface SearchCriteria {
    maxFlightOffers: number;
    flightFilters: FlightFilters;
}

export interface TravelDateTime {
    start: string;
    end: string;
}

export interface FlightSearchRequest {
    currencyCode: string;
    originDestinations: OriginDestination[];
    travelers: Traveler[];
    sources: string[];
    searchCriteria: SearchCriteria;
}