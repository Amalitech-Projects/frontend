import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
            import('./features/landing-page/landing.routes').then(
              (m) => m.routes
        ),
        title: "Travely | Book a Flight, Hotel and Trasport"
    }
];
