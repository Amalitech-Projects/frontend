import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';

export const routes: Routes = [

    {
        path: '',
        component: BookingsComponent,
        loadChildren: () =>
            import('../bookings/components/booking-components.routes').then(
              (m) => m.routes
        ),
    }
];
