export interface IItem {
    imgSrc: string;
    nome: string;
    cor: string;
    quantidade: number;
    valorUnitario: number;
}

export interface IOrder {
    numPedido: number;
    data: Date;
    total: number;
    items: IItem[];
}
