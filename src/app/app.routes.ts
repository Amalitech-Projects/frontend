import { Routes } from '@angular/router';
import { LoadingRequestsComponent } from './features/bookings/components/loading-requests/loading-requests.component';
import { LoginComponent } from './features/login/login.component';
import { OauthVerifierComponent } from './features/oauth-verifier/oauth-verifier.component';
import { RegisterComponent } from './features/register/register.component';
import { CheckoutPageComponent } from './features/checkout-page/checkout-page.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { EmailVerficationComponent } from './features/email-verfication/email-verfication.component';
import { CartPageComponent } from './features/cart-page/cart-page.component';

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
        component: LoginComponent,
        title: "Sign In"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register with us!"
    },
    {
        path: 'oauth-google',
        component: OauthVerifierComponent
    },
    {
        path: 'check-out',
        component: CheckoutPageComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'email-verification',
        component: EmailVerficationComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    }
];
