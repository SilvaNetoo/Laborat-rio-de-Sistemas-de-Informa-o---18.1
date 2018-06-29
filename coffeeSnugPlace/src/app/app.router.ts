import { LoginGarcomComponent } from './components/login-garcom/login-garcom.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginCozinheiroComponent } from './components/login-cozinheiro/login-cozinheiro.component';
import { PedidoClienteComponent } from './components/pedido-cliente/pedido-cliente.component';
import { FazerPedidoComponent } from './components/pedido-cliente/fazer-pedido/fazer-pedido.component';
import { CriarPedidoComponent } from './components/pedido-cliente/fazer-pedido/criar-pedido/criar-pedido.component';
import { ExcluirPedidoComponent } from './components/pedido-cliente/fazer-pedido/excluir-pedido/excluir-pedido.component';
import { EditarPedidoComponent } from './components/pedido-cliente/fazer-pedido/editar-pedido/editar-pedido.component';

export const APP_ROUTES : Routes =[
    //Rota principal
    { path:'home', component: HomeComponent},

    //Rota de login
    { path: 'login-garcom', component: LoginGarcomComponent},
    { path: 'login-cozinheiro', component: LoginCozinheiroComponent },

    //Componentes de pedido
    {path: 'pedido-cliente', component: PedidoClienteComponent , children:[
        {path: 'fazer-pedido', component: FazerPedidoComponent, children:[
            {
                path: 'criar-pedido', component: CriarPedidoComponent
            },
            {
                path: 'excluir-pedido', component: ExcluirPedidoComponent
            },
            {
                path: 'editar-pedido', component: EditarPedidoComponent
            }
        ]}
    ]},

    { path: '**', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
