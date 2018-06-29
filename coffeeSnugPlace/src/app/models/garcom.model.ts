import { Pedido } from './pedidos.model';
import { Pessoa } from './pessoa.model';

export class Garcom extends Pessoa {

    pedidosFeitos: Array<Pedido>;

}