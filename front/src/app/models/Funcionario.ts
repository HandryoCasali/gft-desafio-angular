export type Funcionario = {
    _id?: string;
    nome:string;
    foto:string;
    idade?:number;
    cargo:string;
    hobbie:string;
    naturalidade:string;
    anoAdmissao?: number;
    isActive?: boolean;
    dataCriacao?: string;
    dataAtualizacao?: string;
}
