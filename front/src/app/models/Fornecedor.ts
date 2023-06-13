export interface Fornecedor {
    _id?: string;
    nome: string;
    foto: string;
    descricao: string;
    isActive?: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
}