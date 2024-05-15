import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

export const routes: Routes = [

    {
        path: '',
        component: LandingPageComponent,
        loadChildren: () =>
            import('../bookings/bookings.routes').then(
              (m) => m.routes
        ),
        
    }
];
