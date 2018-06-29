import { Pessoa } from './pessoa.model';
import { Pedido } from './pedido.model';

export class Cozinheiro extends Pessoa{

    pedidosAceitos: Array<Pedido>;
    pedidosConcluidos: Array<Pedido>;

}