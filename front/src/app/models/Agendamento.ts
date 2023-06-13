export interface Agendamento {
    _id?: string;
    idUsuario: string;
    nomeUsuario?: string;
    idEvento: string;
    nomeEvento?: string;
    data: string;
    hora: string;
    isActive?: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
}