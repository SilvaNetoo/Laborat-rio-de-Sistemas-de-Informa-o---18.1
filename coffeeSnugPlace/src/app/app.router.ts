import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES : Routes =[
    //Rota principal
    { path:'home', component: HomeComponent},

    { path: '**', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
