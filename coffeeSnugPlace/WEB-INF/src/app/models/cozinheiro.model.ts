import { Pessoa } from './pessoa.model';
import { Pedido } from './pedidos.model';

export class Cozinheiro extends Pessoa{

    pedidosAceitos: Array<Pedido>;
    pedidosConcluidos: Array<Pedido>;

}