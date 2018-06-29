import { Pessoa } from './pessoa.model';
import { Pedido } from './pedido.model';

export class Garcom extends Pessoa {

    pedidosFeitos: Array<Pedido>;

}