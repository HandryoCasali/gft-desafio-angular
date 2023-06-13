import { Evento } from "./Evento";

export interface Usuario {
    _id?: string;
    nome: string;
    cpf?: string;
    telefone?: string ;
    email: string;
    senha: string;
    isAdmin?: boolean;
    eventos?: Evento[];
    isActive?: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
}