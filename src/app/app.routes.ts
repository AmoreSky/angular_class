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
import { Subcategory } from './subcategory/subcategory';
import { Services } from './services/services';
import { AdminSignin } from './admin-signin/admin-signin';
import { adminAuthGuardGuard } from './admin-auth-guard-guard';
import { AddAdmin } from './add-admin/add-admin';
import { ViewServiceDetails } from './view-service-details/view-service-details';

export const routes: Routes = [
    { path: '', component: HOMEPAGE },
    { path: 'signup', component: Signup },
    { path: 'customer_signin', component: CUSTOMERSIGNIN },
    {path: 'admin_signin', component: AdminSignin},
    { path: 'artisan-dashboard', canActivate: [artisanAuthGuardGuard], 
        children: [
            {path: '', component: ARTISANDASHBOARD},
            {path: 'services', component: Services}
        ]
    },
    { path: 'client-dashboard', component:CLIENTDASHBOARD, canActivate: [authGuardGuard]},
    { path: 'admin-dashboard', canActivate:[adminAuthGuardGuard],
        children: [
            {path: '', component: ADMINDASHBOARD},
            {path: 'add-admin', component: AddAdmin},
            {path:'subcategory', component:Subcategory}
        ]
     },
    {path: 'artisan-signup', component: ArtisanSignup},
    {path: 'artisan-signin', component: ArtisanSignin},
    {path:'sub-category', component:SubCategory},
    {path:'viewService/:id/:artid', component:ViewServiceDetails},
    
    // {path: ''}
];
