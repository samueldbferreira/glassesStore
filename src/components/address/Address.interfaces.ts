export interface IAddress {
    id: number;
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    estado: string;
    cidade: string;
    referencia: string;
}

export interface ISetAddress {
    setId: React.Dispatch<React.SetStateAction<number>>;
    setNome: React.Dispatch<React.SetStateAction<string>>;
    setCep: React.Dispatch<React.SetStateAction<string>>;
    setRua: React.Dispatch<React.SetStateAction<string>>;
    setNumero: React.Dispatch<React.SetStateAction<string>>;
    setComplemento: React.Dispatch<React.SetStateAction<string>>;
    setBairro: React.Dispatch<React.SetStateAction<string>>;
    setEstado: React.Dispatch<React.SetStateAction<string>>;
    setCidade: React.Dispatch<React.SetStateAction<string>>;
    setReferencia: React.Dispatch<React.SetStateAction<string>>;
}
