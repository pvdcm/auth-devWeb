import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
    // {
    //     path: 'dashboard',
    //     loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    //     canActivate: [AuthGuard]
    // }, 
    {
        path: 'produto/:id',
        loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];
