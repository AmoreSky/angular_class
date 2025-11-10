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
import { authGuardGuard } from './auth-guard-guard';
import { SubCategory } from './sub-category/sub-category';
import { artisanAuthGuardGuard } from './artisan-auth-guard-guard';

export const routes: Routes = [
    { path: '', component: HOMEPAGE },
    { path: 'signup', component: Signup },
    { path: 'customer_signin', component: CUSTOMERSIGNIN },
    { path: 'artisan-dashboard', component: ARTISANDASHBOARD , canActivate: [artisanAuthGuardGuard]},
    { path: 'client-dashboard', component: CLIENTDASHBOARD, canActivate: [authGuardGuard] },
    { path: 'admin-dashboard', component: ADMINDASHBOARD },
    {path: 'artisan-signup', component: ArtisanSignup},
    {path: 'artisan-signin', component: ArtisanSignin},
    {path:'sub-category', component:SubCategory}
];
