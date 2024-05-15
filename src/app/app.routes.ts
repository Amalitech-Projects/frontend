import { Routes } from '@angular/router';
import { LoadingRequestsComponent } from './features/bookings/components/loading-requests/loading-requests.component';
import { LoginComponent } from './features/login/login.component';
import { OauthVerifierComponent } from './features/oauth-verifier/oauth-verifier.component';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
            import('./features/landing-page/landing.routes').then(
              (m) => m.routes
        ),
        title: "Travely | Book a Flight, Hotel and Trasport"
    },
    {
        path: 'request',
        component: LoadingRequestsComponent,
        title: "Loading Request"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'oauth-google',
        component: OauthVerifierComponent
    }

];
