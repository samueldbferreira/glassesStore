export interface ITitleDescription{
    title: string;
    description: string;
}

export interface ITitles {
    feminino: ITitleDescription;
    masculino: ITitleDescription;
    grau: ITitleDescription;
    sol: ITitleDescription;
    antiluz: ITitleDescription;
}

export interface IProduct {
    id: number;
    nome: string;
    preco: number;
    parcelas: number;
    imagem: string;
}
