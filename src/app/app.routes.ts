import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('../app/pages/about-pages/about-pages.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('../app/pages/pricing-page/pricing-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('../app/pages/contact/contact.component')
    },
    {
        path: '**',
        redirectTo: () => {
            return 'about'
        }
    }
];
