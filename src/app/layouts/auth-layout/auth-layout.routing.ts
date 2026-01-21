import { Routes } from '@angular/router';

import { RtlComponent } from '../../pages/rtl/rtl.component';
import { AuthLayoutComponent } from './auth-layout.component';


export const AuthLayoutRoutes: Routes = [
     {
        path: '',
        component: AuthLayoutComponent, // This is inside the module now, allowed
        children: [
             { path: 'rtl', component: RtlComponent },
        ]
    }
];
