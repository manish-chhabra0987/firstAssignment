import { Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo : '/home',
        pathMatch: 'full'
    },
    { 
        path: 'home',
        loadComponent: () => import('./../components/home/home.component').then(m => m.HomeComponent)
        
    },
    { 
        path: 'my-space',
        loadComponent: () => import('./../components/my-space/my-space.component').then(m => m.MySpaceComponent)
    },
    { 
        path: 'events',
        loadComponent: () => import('./../components/events/events.component').then(m => m.EventsComponent)
    },
    { 
        path: 'videos',
        loadComponent: () => import('./../components/videos/videos.component').then(m => m.VideosComponent)
    },
    { 
        path: 'live',
        loadComponent: () => import('./../components/live/live.component').then(m => m.LiveComponent)
    },
    { 
        path: 'register',
        loadComponent: () => import('./../components/register/register.component').then(m => m.RegisterComponent)
    },
];
