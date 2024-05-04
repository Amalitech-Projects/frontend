import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HotelsSearchComponent } from './hotels-search/hotels-search.component';
import { CarsComponent } from './cars/cars.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';

export const routes: Routes = [

    {
        path: '',
        component: FlightSearchComponent,
    },
    {
        path: "hotels",
        component: HotelsSearchComponent
    },
    {
        path: "Cars",
        component: CarsComponent
    },
    {
        path: "things-to-do",
        component: ThingsToDoComponent
    }

];
