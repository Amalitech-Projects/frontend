interface Segment {
    departure: {
        iataCode: string;
        terminal: string | null;
        at: string;
    };
    arrival: {
        iataCode: string;
        terminal: string | null;
        at: string;
    };
    carrierCode: string;
    number: string;
    aircraft: {
        code: string;
    };
    operating: {
        carrierCode: string;
    };
    duration: string;
    stops: null;
    id: string;
    numberOfStops: number;
    blacklistedInEU: boolean;
    co2Emissions: null;
}

interface Itinerary {
    duration: string;
    segments: Segment[];
}

interface TravelerPricing {
    travelerId: string;
    fareOption: string;
    travelerType: string;
    associatedAdultId: null;
    price: {
        currency: string;
        total: string;
        base: string;
        fees: null;
        grandTotal: string | null;
        taxes: null;
        refundableTaxes: null;
        margin: null;
        billingCurrency: null;
        additionalServices: null;
    };
    fareDetailsBySegment: {
        segmentId: string;
        cabin: string;
        fareBasis: string;
        brandedFare: string;
        segmentClass: string;
        allotmentDetails: null;
        sliceDiceIndicator: null;
        includedCheckedBags: {
            quantity: number;
            weight: number;
            weightUnit: null;
        };
        additionalServices: null;
        amenities: {
            code: null;
            description: string;
            isChargeable: boolean;
            amenityType: string;
        }[];
        allotment: boolean;
    }[];
}

export interface FlightOffer {
    id: string;
    type: string;
    source: string;
    instantTicketingRequired: boolean;
    disablePricing: boolean;
    nonHomogeneous: boolean;
    oneWay: boolean;
    paymentCardRequired: boolean;
    lastTicketingDate: null;
    numberOfBookableSeats: number;
    itineraries: Itinerary[];
    price: {
        currency: string;
        total: string;
        base: string;
        fees: {
            amount: string;
            type: string;
        }[];
        grandTotal: string;
        taxes: null;
        refundableTaxes: null;
        margin: null;
        billingCurrency: null;
        additionalServices: null;
    };
    pricingOptions: {
        includedCheckedBagsOnly: boolean;
        fareType: string[];
        corporateCodes: null;
        refundableFare: boolean;
        noRestrictionFare: boolean;
        noPenaltyFare: boolean;
    };
    validatingAirlineCodes: string[];
    travelerPricings: TravelerPricing[];
    choiceProbability: null;
    fareRules: null;
}

export interface FlightOfferResponse {
    flightOffers: FlightOffer[];
}
