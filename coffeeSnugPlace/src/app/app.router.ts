import { LoginGarcomComponent } from './components/login-garcom/login-garcom.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginCozinheiroComponent } from './components/login-cozinheiro/login-cozinheiro.component';

export const APP_ROUTES : Routes =[
    //Rota principal
    { path:'home', component: HomeComponent},

    //Rota de login
    { path: 'login-garcom', component: LoginGarcomComponent},
    { path: 'login-cozinheiro', component: LoginCozinheiroComponent },

    { path: '**', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
