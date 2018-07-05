import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginGarcomComponent } from './components/login-garcom/login-garcom.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginCozinheiroComponent } from './components/login-cozinheiro/login-cozinheiro.component';
import { PedidoClienteComponent } from './components/pedido-cliente/pedido-cliente.component';
import { FazerPedidoComponent } from './components/pedido-cliente/fazer-pedido/fazer-pedido.component';
import { CriarPedidoComponent } from './components/pedido-cliente/fazer-pedido/criar-pedido/criar-pedido.component';
import { ExcluirPedidoComponent } from './components/pedido-cliente/fazer-pedido/excluir-pedido/excluir-pedido.component';
import { EditarPedidoComponent } from './components/pedido-cliente/fazer-pedido/editar-pedido/editar-pedido.component';
import { AceitaPedidoComponent } from './components/pedido-cozinha/aceita-pedido/aceita-pedido.component';
import { ConfirmarPedidoComponent } from './components/pedido-cozinha/aceita-pedido/confirmar-pedido/confirmar-pedido.component';
import { PedidoCozinhaComponent } from './components/pedido-cozinha/pedido-cozinha.component';
import { MenuComponent } from './components/pedido-cozinha/menu/menu.component';
import { FinalizarPedidoComponent } from './components/pedido-cozinha/finalizar-pedido/finalizar-pedido.component';
import { ConfirmarTerminoComponent } from './components/pedido-cozinha/finalizar-pedido/confirmar-termino/confirmar-termino.component';


export const APP_ROUTES: Routes = [
    //Rota principal
    { path: 'home', component: HomeComponent },

    //Rota de login
    { path: 'login-garcom', component: LoginGarcomComponent},
    { path: 'login-cozinheiro', component: LoginCozinheiroComponent},
    
    {path: 'cadastro', component: CadastroComponent},
    

    //Componentes de pedido
    //Garçom
    {
        path: 'pedido-cliente', component: PedidoClienteComponent, children: [

            {
                path: 'fazer-pedido', component: FazerPedidoComponent, children: [
                    {
                        path: 'criar-pedido', component: CriarPedidoComponent
                    },
                    {
                        path: 'excluir-pedido', component: ExcluirPedidoComponent
                    },
                    {
                        path: 'editar-pedido', component: EditarPedidoComponent
                    }
                ]
            },
        ]
    },
    //Cozinha
    {
        path: 'pedido-cozinha', component: PedidoCozinhaComponent, children: [
            { path: '', component: MenuComponent },
            {
                path: 'aceita-pedido', component: AceitaPedidoComponent, children: [
                    {
                        path: 'confirmar-pedido', component: ConfirmarPedidoComponent
                    },
                ]
            },
            {
                path: 'finalizar-pedido', component: FinalizarPedidoComponent, children: [
                    {
                        path: 'confirmar-termino', component: ConfirmarTerminoComponent
                    }
                ]
            }
        ]
    },

    { path: '**', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
]
