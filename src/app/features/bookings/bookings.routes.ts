import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { FlightsRequestComponent } from '../flights-request/flights-request.component';

export const routes: Routes = [

    {
        path: '',
        component: BookingsComponent,
        loadChildren: () =>
            import('../bookings/components/booking-components.routes').then(
              (m) => m.routes
        )
    },
    {
        path: 'flight-requests',
        component: FlightsRequestComponent
    }
];
