import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Signup } from './signup/signup';
import { CUSTOMERSIGNIN } from './customer_signin/customer_signin';
import { HOMEPAGE } from './homepage/homepage';
import { ARTISANDASHBOARD } from './artisan-dashboard/artisan-dashboard';
import { CLIENTDASHBOARD } from './client-dashboard/client-dashboard';
import { ADMINDASHBOARD } from './admin-dashboard/admin-dashboard';
import { ArtisanSignup } from './artisan-signup/artisan-signup';
import { ArtisanSignin } from './artisan-signin/artisan-signin';

export const routes: Routes = [
    { path: '', component: HOMEPAGE },
    { path: 'signup', component: Signup },
    { path: 'customer_signin', component: CUSTOMERSIGNIN },
    { path: 'artisan-dashboard', component: ARTISANDASHBOARD },
    { path: 'client-dashboard', component: CLIENTDASHBOARD },
    { path: 'admin-dashboard', component: ADMINDASHBOARD },
    {path: 'artisan-signup', component: ArtisanSignup},
    {path: 'artisan-signin', component: ArtisanSignin}
];
