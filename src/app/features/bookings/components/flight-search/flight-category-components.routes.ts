import { Routes } from '@angular/router';
import { RoundTripComponent } from './round-trip/round-trip.component';
import { OneWayComponent } from './one-way/one-way.component';
import { MultipleFlightsComponent } from './multiple-flights/multiple-flights.component';

export const routes: Routes = [

    {
        path: '',
        component: RoundTripComponent
    },
    {
        path: 'one-way',
        component: OneWayComponent
    },
    {
        path: "multiple-flights",
        component: MultipleFlightsComponent
    }
];
