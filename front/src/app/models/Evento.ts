export interface Evento {
    _id?: string;
    foto: string;
    nome: string;
    descricao: string;
    dataInicio: string;
    dataFim: string;
    horaInicio: string;
    horaFim: string;
    agendados?: any[],
    isActive?: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
    
}